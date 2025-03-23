/**
 * @type {import('semantic-release').GlobalConfig}
 */
export default {
  extends: 'semantic-release-monorepo',
  branches: [
    {
      name: 'main',
    },
    {
      name: 'develop',
      channel: 'next',
      prerelease: true,
    },
  ],
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@mctom234/semantic-release-pnpm',
    '@semantic-release/github',
  ],
};
