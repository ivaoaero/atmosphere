import { ESLint } from 'eslint';

module.exports = {
  extends: ['plugin:tailwindcss/recommended'],
  plugins: ['tailwindcss'],
  rules: {
    'tailwindcss/classnames-order': 'error',
  },
} satisfies ESLint.ConfigData;
