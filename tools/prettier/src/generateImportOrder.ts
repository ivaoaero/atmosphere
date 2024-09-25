import { PrettierConfig } from '@ianvs/prettier-plugin-sort-imports';

/**
 * Generate an import order configuration for Prettier.
 * @param importOrder If provided, these orderings will be added to the configuration.
 * @param overwrite If true, the orderings provided in `importOrder` will be used only.
 */
export const generateImportOrder = (
  importOrder: string[] = [],
  overwrite: boolean = false,
) => {
  if (!overwrite) {
    importOrder = [
      '^(react/(.*)$)|^(react$)',
      '',
      '^(@ivaoaero/(.*)$)|^(@ivaoaero$)',
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
    arrowParens: 'always',
    singleQuote: true,
    tabWidth: 2,
    endOfLine: 'lf',
    printWidth: 80,
    trailingComma: 'all',
    semi: true,
    plugins: [
      '@ianvs/prettier-plugin-sort-imports',
      'prettier-plugin-tailwindcss',
    ],
    importOrder,
    importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy'],
    importOrderTypeScriptVersion: '5.3.2',
    tailwindFunctions: ['clsx', 'cva'],
  } satisfies PrettierConfig;
};
