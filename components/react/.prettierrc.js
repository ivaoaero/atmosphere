import { default as ivaoPrettierConfig } from '@ivaoaero/prettier-config';
import { default as generateImportOrder } from '@ivaoaero/prettier-config/dist/generateImportOrder.js';

export default {
  ...ivaoPrettierConfig,
  ...generateImportOrder.default([
    '@components',
    '',
    '@utils',
    '@hooks',
    '',
    '@styles',
    '',
    'src',
    'static',
    '',
    '@stories',
  ]),
};
