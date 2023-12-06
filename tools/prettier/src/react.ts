import { PrettierConfig } from '@ianvs/prettier-plugin-sort-imports';
import generateImportOrder from './generateImportOrder';
import config from './index';

const { plugins: _, ...orderConfig } = generateImportOrder(undefined, undefined, true);

export default {
  ...config,
  ...orderConfig,
} satisfies PrettierConfig;
