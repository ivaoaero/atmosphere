import { PrettierConfig } from '@trivago/prettier-plugin-sort-imports';
import { ESLint } from 'eslint';

module.exports = {
  env: {
    browser: true,
    es2022: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:prettier/recommended',
    'plugin:tailwindcss/recommended',
    'plugin:storybook/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
    tsconfigRootDir: './',
    project: ['./tsconfig.json'],
  },
  plugins: [
    '@typescript-eslint',
    'react',
    'jsx-a11y',
    'react-refresh',
    'prettier',
    'tailwindcss',
    'storybook',
  ],
  rules: {
    'tailwindcss/classnames-order': 'error',
    'react-refresh/only-export-components': 'warn',
    'prettier/prettier': [
      'error',
      {
        arrowParens: 'always',
        singleQuote: true,
        tabWidth: 2,
        endOfLine: 'lf',
        printWidth: 80,
        trailingComma: 'all',
        semi: true,
        importOrder: [
          '^(react/(.*)$)|^(react$)',
          '<THIRD_PARTY_MODULES>',
          '^@components/(.*)$',
          '^@utils/(.*)$',
          '^@styles/(.*)$',
          '^src/(.*)$',
          '^[./]',
          '^@stories/(.*)$',
          '^static/(.*)$',
        ],
        importOrderSeparation: true,
        importOrderSortSpecifiers: true,
        plugins: [
          '@trivago/prettier-plugin-sort-imports',
          'prettier-plugin-tailwindcss',
        ],
      },
    ],
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'jsx-a11y/aria-props': 'warn',
    'jsx-a11y/aria-proptypes': 'warn',
    'jsx-a11y/aria-unsupported-elements': 'warn',
    'jsx-a11y/role-has-required-aria-props': 'warn',
    'jsx-a11y/role-supports-aria-props': 'warn',
    'jsx-a11y/alt-text': [
      'warn',
      {
        elements: ['img'],
        img: ['Image'],
      },
    ],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
} satisfies ESLint.ConfigData & {
  rules: { 'prettier/prettier': ['error', PrettierConfig] };
};
