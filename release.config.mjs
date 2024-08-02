/**
 * @type {import('semantic-release-plus').GlobalConfig}
 */
export default {
  branches: [
    '+([0-9])?(.{+([0-9]),x}).x',
    'main',
    'next',

    'next-major',
    {
      name: 'beta',
      prerelease: true,
    },
    {
      name: 'alpha',
      prerelease: true,
    },
  ],
  /* eslint-disable-next-line no-template-curly-in-string */
  tagFormat: 'v${version}',
  ci: true,
};
