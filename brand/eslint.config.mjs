import ivaoConfig from '@ivao/eslint-config';

export default [
  ...ivaoConfig.configs.base,
  {
    languageOptions: {
      parserOptions: {
        projectService: {
          allowDefaultProject: [
            'eslint.config.mjs',
            'release.config.js',
            'tsdown.config.ts',
          ],
        },
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
];
