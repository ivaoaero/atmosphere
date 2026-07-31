import tokenDocument from './tokens.json';

type TokenNode = {
  [key: string]: unknown;
};

type TokenValues = {
  [key: string]: string | TokenValues;
};

type ExtractedColorValues<Group> = {
  [Name in keyof Group]: Group[Name] extends string
    ? string
    : Group[Name] extends TokenNode
      ? ExtractedColorValues<Group[Name]>
      : never;
};

type ExtractedFontValues<Group> = {
  [Name in keyof Group]: Group[Name] extends string[] ? string : never;
};

const colorPattern = /^#[0-9a-f]{6}$/i;
const referencePattern = /^[^.{}]+$/;

const isTokenNode = (value: unknown): value is TokenNode =>
  typeof value === 'object' && value !== null && !Array.isArray(value);

const findToken = (path: string[]): unknown => {
  let value: unknown = tokenDocument;

  for (const segment of path) {
    if (!isTokenNode(value) || !Object.hasOwn(value, segment)) {
      throw new TypeError(`Unknown token reference: ${path.join('.')}`);
    }
    value = value[segment];
  }

  return value;
};

const resolveColorValue = (
  value: string,
  path: string[],
  references: string[] = [],
): string => {
  if (colorPattern.test(value)) return value;

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

const extractColorValues = <Group extends TokenNode>(
  group: Group,
  path: string[],
): ExtractedColorValues<Group> => {
  const values: TokenValues = {};

  for (const [name, node] of Object.entries(group)) {
    const childPath = [...path, name];

    if (typeof node === 'string') {
      values[name] = resolveColorValue(node, childPath);
      continue;
    }

    if (!isTokenNode(node)) {
      throw new TypeError(`Invalid color token node: ${name}`);
    }
    values[name] = extractColorValues(node, childPath);
  }

  return values as ExtractedColorValues<Group>;
};

const extractFontValues = <Group extends TokenNode>(
  group: Group,
): ExtractedFontValues<Group> => {
  const values: Record<string, string> = {};

  for (const [name, value] of Object.entries(group)) {
    if (
      !Array.isArray(value) ||
      !value.every((family): family is string => typeof family === 'string')
    ) {
      throw new TypeError(`Invalid font family token: ${name}`);
    }
    values[name] = value.join(', ');
  }

  return values as ExtractedFontValues<Group>;
};

export const tokens = tokenDocument;
export const colors = extractColorValues(tokenDocument.color, ['color']);
export const fonts = extractFontValues(tokenDocument.font);
