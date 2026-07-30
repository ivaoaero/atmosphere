import tokenDocument from './tokens.json';

type TokenNode = {
  $type?: string;
  $value?: unknown;
  [key: string]: unknown;
};

type TokenValues = {
  [key: string]: string | TokenValues;
};

type ExtractedColorValues<Group> = {
  [
    Name in keyof Group as Name extends '$root'
      ? 'DEFAULT'
      : Name extends `$${string}`
        ? never
        : Name
  ]: Group[Name] extends { $value: { hex: string } }
    ? string
    : Group[Name] extends TokenNode
      ? ExtractedColorValues<Group[Name]>
      : never;
};

type ExtractedFontValues<Group> = {
  [
    Name in keyof Group as Name extends `$${string}` ? never : Name
  ]: Group[Name] extends { $value: string[] } ? string : never;
};

const isTokenNode = (value: unknown): value is TokenNode =>
  typeof value === 'object' && value !== null;

const extractColorValues = <Group extends TokenNode>(
  group: Group,
): ExtractedColorValues<Group> => {
  const values: TokenValues = {};
  const entries = Object.entries(group as Record<string, unknown>);

  for (const [name, node] of entries) {
    if (name.startsWith('$') && name !== '$root') continue;
    if (!isTokenNode(node)) {
      throw new TypeError(`Invalid color token node: ${name}`);
    }

    if ('$value' in node) {
      const value = node.$value;
      if (
        !isTokenNode(value) ||
        typeof value.hex !== 'string' ||
        value.colorSpace !== 'srgb'
      ) {
        throw new TypeError(`Invalid sRGB color token: ${name}`);
      }
      values[name === '$root' ? 'DEFAULT' : name] = value.hex;
      continue;
    }

    values[name] = extractColorValues(node);
  }

  return values as ExtractedColorValues<Group>;
};

const extractFontValues = <Group extends TokenNode>(
  group: Group,
): ExtractedFontValues<Group> => {
  const values: Record<string, string> = {};
  const entries = Object.entries(group as Record<string, unknown>);

  for (const [name, node] of entries) {
    if (name.startsWith('$')) continue;
    if (
      !isTokenNode(node) ||
      !Array.isArray(node.$value) ||
      !node.$value.every(
        (family): family is string => typeof family === 'string',
      )
    ) {
      throw new TypeError(`Invalid font family token: ${name}`);
    }
    values[name] = node.$value.join(', ');
  }

  return values as ExtractedFontValues<Group>;
};

export const tokens = tokenDocument;
export const colors = extractColorValues(tokenDocument.color);
export const fonts = extractFontValues(tokenDocument.font);
