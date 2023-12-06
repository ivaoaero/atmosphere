import { PrettierConfig } from '@ianvs/prettier-plugin-sort-imports';

export default (customOrder: string[] = [], overwrite: boolean = false, react: boolean = false): PrettierConfig => {
  if (!overwrite) {
    customOrder = [
      '<BUILTIN_MODULES>',
      '',
      '<THIRD_PARTY_MODULES>',
      '',
      '<TYPES>',
      '^types$',
      '',
      '^[./]',
    ];
    if (customOrder.length) {
      customOrder = [
        '',
        ...customOrder,
      ];
    }
  }
  if (react) {
    customOrder = [
      '^(react/(.*)$)|^(react$)',
      '',
      ...customOrder,
    ];
  }
  return ({
    importOrder: customOrder,
    importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy'],
    importOrderTypeScriptVersion: '5.3.2',
    plugins: ['@ianvs/prettier-plugin-sort-imports'],
  });
};