import ivaoConfig from '@ivaoaero/eslint-config';

export default [
  ...ivaoConfig.configs.base,
  {
    languageOptions: {
      parserOptions: {
        projectService: {
          allowDefaultProject: ['eslint.config.mjs'],
        },
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
];
