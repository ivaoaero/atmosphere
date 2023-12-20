import { ESLint } from 'eslint';

module.exports = {
  ignorePatterns: [
    'node_modules/**/*',
    'dist/**/*',
    'build/**/*',
    'storybook-static/**/*',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    tsconfigRootDir: './',
    project: ['./tsconfig.json'],
  },
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
  },
} satisfies ESLint.ConfigData;
