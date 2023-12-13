import { PrettierConfig } from '@ianvs/prettier-plugin-sort-imports';

/**
 * Generate an import order configuration for Prettier.
 * @param importOrder If provided, these orderings will be added to the configuration.
 * @param overwrite If true, the orderings provided in `importOrder` will be used only.
 */
export default (
  importOrder: string[] = [],
  overwrite: boolean = false,
): PrettierConfig => {
  if (!overwrite) {
    importOrder = [
      '^(react/(.*)$)|^(react$)',
      '',
      '<BUILTIN_MODULES>',
      '',
      '<THIRD_PARTY_MODULES>',
      '',
      '<TYPES>',
      '^types$',
      '',
      ...(importOrder.length ? [...importOrder, ''] : []),
      '^[./]',
    ];
  }
  return {
    importOrder,
    importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy'],
    importOrderTypeScriptVersion: '5.3.2',
    plugins: ['@ianvs/prettier-plugin-sort-imports'],
  };
};
