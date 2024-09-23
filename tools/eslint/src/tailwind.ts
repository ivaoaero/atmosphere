import tailwind from 'eslint-plugin-tailwindcss';
import tseslint from 'typescript-eslint';

import type { Config } from 'typescript-eslint';

export default tseslint.config(...tailwind.configs['flat/recommended'], {
  rules: {
    'tailwindcss/classnames-order': 'error',
  },
}) as Config[];
