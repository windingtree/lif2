import run from '@jamesives/github-pages-deploy-action';

run({
  token: process.env.GITHUB_TOKEN,
  branch: 'gh-pages',
  folder: 'build',
  hostname: 'github.com',
  repositoryName: 'windingtree/lif2',
  workspace: '.',
  clean: true,
  silent: false,
  isTest: 0
});
