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
            'generate-colors-css.ts',
            'postcss.config.js',
            'tailwind.config.ts',
            'vite.build.config.ts',
          ],
          maximumDefaultProjectFileMatchCount_THIS_WILL_SLOW_DOWN_LINTING: 10,
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
