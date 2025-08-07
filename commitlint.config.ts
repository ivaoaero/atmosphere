import { UserConfig } from '@commitlint/types';

export default {
  extends: ['@commitlint/config-conventional'],
  // Added due to an old commit that had a long footer line (c338c07)
  rules: {
    'footer-max-line-length': [1, 'always', 100],
  },
} satisfies UserConfig;
