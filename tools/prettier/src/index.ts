import { PrettierConfig } from '@ianvs/prettier-plugin-sort-imports';
import generateImportOrder from './generateImportOrder';

const { plugins = [], ...orderConfig } = generateImportOrder();

export default {
  arrowParens: 'always',
  singleQuote: true,
  tabWidth: 2,
  endOfLine: 'lf',
  printWidth: 80,
  trailingComma: 'all',
  semi: true,
  ...orderConfig,
  plugins: [
    ...plugins,
    'prettier-plugin-tailwindcss',
  ],
} satisfies PrettierConfig;
