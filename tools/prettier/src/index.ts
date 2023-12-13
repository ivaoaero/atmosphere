import { PrettierConfig } from '@ianvs/prettier-plugin-sort-imports';

import generateImportOrder from './generateImportOrder';

const orderConfig = generateImportOrder();

module.exports = {
  arrowParens: 'always',
  singleQuote: true,
  tabWidth: 2,
  endOfLine: 'lf',
  printWidth: 80,
  trailingComma: 'all',
  semi: true,
  ...orderConfig,
} satisfies PrettierConfig;
