import ivaoConfig from '@ivaoaero/eslint-config';

export default [
  ...ivaoConfig.configs.base,
  {
    languageOptions: {
      parserOptions: {
        projectService: {
          allowDefaultProject: ['eslint.config.mjs', 'tsup.config.ts'],
        },
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
];
