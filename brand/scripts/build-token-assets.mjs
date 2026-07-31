import { copyFile, mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const packageRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const sourcePath = resolve(packageRoot, 'src/tokens.json');
const outputDirectory = resolve(packageRoot, 'dist');
const colorPattern = /^#[0-9a-f]{6}$/i;
const referencePattern = /^[^.{}]+$/;

/**
 * @typedef {{ [key: string]: unknown }} TokenNode
 * @typedef {{ path: string[]; value: string; reference?: string[] }} ColorToken
 * @typedef {{ path: string[]; value: string[] }} FontToken
 */

/**
 * @param {unknown} value
 * @returns {value is TokenNode}
 */
const isTokenNode = (value) =>
  typeof value === 'object' && value !== null && !Array.isArray(value);

const parsedDocument = /** @type {unknown} */ (
  JSON.parse(await readFile(sourcePath, 'utf8'))
);
if (!isTokenNode(parsedDocument)) {
  throw new TypeError('The token document must be an object');
}
const document = /** @type {TokenNode} */ (parsedDocument);

/**
 * @param {string[]} path
 * @returns {unknown}
 */
const findToken = (path) => {
  /** @type {unknown} */
  let value = document;

  for (const segment of path) {
    if (!isTokenNode(value) || !Object.hasOwn(value, segment)) {
      throw new TypeError(`Unknown token reference: ${path.join('.')}`);
    }
    value = value[segment];
  }

  return value;
};

/**
 * @param {string} value
 * @param {string[]} path
 * @param {string[]} [references]
 * @returns {string}
 */
const resolveColorValue = (value, path, references = []) => {
  if (colorPattern.test(value)) return value.toLowerCase();

  if (!referencePattern.test(value)) {
    throw new TypeError(`Invalid color token value: ${value}`);
  }

  const current = path.join('.');
  const referencePath = [...path.slice(0, -1), value];
  const reference = referencePath.join('.');
  if (reference === current || references.includes(reference)) {
    throw new TypeError(
      `Circular token reference: ${[...references, current, reference].join(
        ' -> ',
      )}`,
    );
  }

  const referencedValue = findToken(referencePath);
  if (typeof referencedValue !== 'string') {
    throw new TypeError(
      `Color reference does not target a value: ${reference}`,
    );
  }

  return resolveColorValue(referencedValue, referencePath, [
    ...references,
    current,
  ]);
};

/** @type {ColorToken[]} */
const colorTokens = [];
/** @type {FontToken[]} */
const fontTokens = [];

/**
 * @param {TokenNode} node
 * @param {string[]} path
 */
const visitColors = (node, path) => {
  for (const [name, child] of Object.entries(node)) {
    const childPath = [...path, name];
    if (typeof child === 'string') {
      const value = resolveColorValue(child, childPath);
      const reference = colorPattern.test(child) ? undefined : [...path, child];
      colorTokens.push({
        path: childPath,
        value,
        ...(reference ? { reference } : {}),
      });
      continue;
    }

    if (!isTokenNode(child)) {
      throw new TypeError(`Invalid color token at ${childPath.join('.')}`);
    }
    visitColors(child, childPath);
  }
};

if (!isTokenNode(document.color)) {
  throw new TypeError('The token document must contain a color object');
}
visitColors(document.color, ['color']);

if (!isTokenNode(document.font)) {
  throw new TypeError('The token document must contain a font object');
}
for (const [name, value] of Object.entries(document.font)) {
  if (
    !Array.isArray(value) ||
    !value.every((family) => typeof family === 'string')
  ) {
    throw new TypeError(`Invalid font family token: font.${name}`);
  }
  fontTokens.push({ path: ['font', name], value });
}

/** @param {string[]} path */
const tokenName = (path) =>
  path
    .filter((segment) => segment !== 'DEFAULT')
    .join('-')
    .replace(/[^a-zA-Z0-9-_]/g, '-');

/** @param {string[]} families */
const cssFontFamily = (families) =>
  families
    .map((family) =>
      family.includes(' ') ? `"${family.replaceAll('"', '\\"')}"` : family,
    )
    .join(', ');

const tokenDeclarations = [
  ...colorTokens.map(({ path, value, reference }) => {
    const cssValue = reference ? `var(--ivao-${tokenName(reference)})` : value;
    return `  --ivao-${tokenName(path)}: ${cssValue};`;
  }),
  ...fontTokens.map(
    ({ path, value }) =>
      `  --ivao-${tokenName(path)}: ${cssFontFamily(value)};`,
  ),
].join('\n');

const themeDeclarations = [
  ...colorTokens.map(({ path }) => {
    const name = tokenName(path);
    return `  --${name}: var(--ivao-${name});`;
  }),
  ...fontTokens.map(({ path }) => {
    const name = tokenName(path);
    return `  --${name}: var(--ivao-${name});`;
  }),
].join('\n');

await mkdir(outputDirectory, { recursive: true });
await Promise.all([
  copyFile(sourcePath, resolve(outputDirectory, 'tokens.json')),
  writeFile(
    resolve(outputDirectory, 'tokens.css'),
    `:root {\n${tokenDeclarations}\n}\n`,
  ),
  writeFile(
    resolve(outputDirectory, 'theme.css'),
    `@import "./tokens.css";\n\n@theme inline {\n${themeDeclarations}\n}\n`,
  ),
]);
