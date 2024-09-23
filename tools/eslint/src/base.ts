import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

import type { Config } from 'typescript-eslint';

export default tseslint.config(
  {
    ignores: [
      'node_modules/**/*',
      'dist/**/*',
      'build/**/*',
      'storybook-static/**/*',
    ],
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    files: ['**/*.js'],
    ...tseslint.configs.disableTypeChecked,
  },
) as Config[];
