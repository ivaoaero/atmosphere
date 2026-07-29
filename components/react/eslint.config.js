import ivaoConfig from '@ivao/eslint-config';

export default [
  ...ivaoConfig.setups.reactRecommended,
  ...ivaoConfig.configs.storybook(),
  {
    settings: {
      react: {
        version: '18',
      },
    },
    languageOptions: {
      parserOptions: {
        projectService: {
          allowDefaultProject: [
            '.prettierrc.js',
            'eslint.config.js',
            'postcss.config.js',
            'release.config.js',
            'tailwind.preset.ts',
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
