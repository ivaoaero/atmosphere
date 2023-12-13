import { ESLint } from 'eslint';

module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:prettier/recommended',
    'plugin:tailwindcss/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    tsconfigRootDir: './',
    project: ['./tsconfig.json'],
  },
  plugins: ['@typescript-eslint', 'prettier', 'tailwindcss'],
  rules: {
    'tailwindcss/classnames-order': 'error',
    'prettier/prettier': 'error',
  },
} satisfies ESLint.ConfigData;
