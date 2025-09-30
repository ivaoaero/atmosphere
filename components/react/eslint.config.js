import ivaoConfig from '@ivao/eslint-config';

export default [
  ...ivaoConfig.setups.reactRecommended,
  ...ivaoConfig.configs.storybook,
  {
    languageOptions: {
      parserOptions: {
        projectService: {
          allowDefaultProject: [
            '.storybook/*.ts',
            '.prettierrc.js',
            'eslint.config.js',
            'postcss.config.js',
            'release.config.js',
          ],
        },
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    rules: {
      'jsx-a11y/heading-has-content': 'off',
      'jsx-a11y/anchor-has-content': 'off',
    },
  },
  {
    files: ['**/*.stories.tsx'],
    rules: {
      'react-hooks/rules-of-hooks': 'off',
    },
  },
];
