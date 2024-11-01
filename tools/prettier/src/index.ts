import { PrettierConfig } from '@ianvs/prettier-plugin-sort-imports';

import { generateImportOrder } from './generateImportOrder';

module.exports = generateImportOrder() satisfies PrettierConfig;
