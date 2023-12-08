import { ESLint } from 'eslint';

module.exports = {
  extends: ['plugin:storybook/recommended'],
  plugins: ['storybook'],
} satisfies ESLint.ConfigData;
