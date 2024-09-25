import ivaoConfig from './dist/index.js';

export default [
  ...ivaoConfig.configs.base,
  {
    languageOptions: {
      parserOptions: {
        projectService: {
          allowDefaultProject: ['eslint.config.js', 'tsup.config.ts'],
        },
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
];
