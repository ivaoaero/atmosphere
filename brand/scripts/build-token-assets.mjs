import { copyFile, mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const packageRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const sourcePath = resolve(packageRoot, 'src/tokens.json');
const outputDirectory = resolve(packageRoot, 'dist');

/**
 * @typedef {{
 *   $type?: string;
 *   $value?: unknown;
 *   [key: string]: unknown;
 * }} TokenNode
 * @typedef {{ path: string[]; value: string }} ColorToken
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

/** @type {ColorToken[]} */
const colorTokens = [];
/** @type {FontToken[]} */
const fontTokens = [];

/**
 * @param {TokenNode} node
 * @param {string[]} [path]
 * @param {string} [inheritedType]
 */
const visit = (node, path = [], inheritedType) => {
  const type = node.$type ?? inheritedType;

  if ('$value' in node) {
    if (!type) throw new TypeError(`Missing token type at ${path.join('.')}`);

    if (type === 'color') {
      const value = node.$value;
      if (
        !isTokenNode(value) ||
        value.colorSpace !== 'srgb' ||
        !Array.isArray(value.components) ||
        value.components.length !== 3 ||
        value.components.some(
          (component) =>
            typeof component !== 'number' || component < 0 || component > 1,
        ) ||
        typeof value.hex !== 'string' ||
        !/^#[0-9a-f]{6}$/i.test(value.hex)
      ) {
        throw new TypeError(`Invalid sRGB color token at ${path.join('.')}`);
      }
      colorTokens.push({ path, value: value.hex.toLowerCase() });
      return;
    }

    if (
      type === 'fontFamily' &&
      Array.isArray(node.$value) &&
      node.$value.every((family) => typeof family === 'string')
    ) {
      fontTokens.push({ path, value: node.$value });
      return;
    }

    throw new TypeError(
      `Unsupported token type "${type}" at ${path.join('.')}`,
    );
  }

  for (const [name, child] of Object.entries(node)) {
    if (name.startsWith('$') && name !== '$root') continue;
    if (!isTokenNode(child)) {
      throw new TypeError(`Invalid token node at ${[...path, name].join('.')}`);
    }
    visit(/** @type {TokenNode} */ (child), [...path, name], type);
  }
};

visit(document);

/** @param {string[]} path */
const tokenName = (path) =>
  path
    .filter((segment) => segment !== '$root')
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
  ...colorTokens.map(
    ({ path, value }) => `  --ivao-${tokenName(path)}: ${value};`,
  ),
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
