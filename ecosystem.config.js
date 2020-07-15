module.exports = {
  apps: [
    {
      name: 'next-01',
      script: './node_modules/.bin/next',
      args: 'start --port 3000',
      instances: 0,
      exec_mode: 'cluster',
    },
    {
      name: 'next-02',
      script: './node_modules/.bin/next',
      args: 'start --port 3001',
      instances: 0,
      exec_mode: 'cluster',
    },
    {
      name: 'next-03',
      script: './node_modules/.bin/next',
      args: 'start --port 3002',
      instances: 0,
      exec_mode: 'cluster',
    },
  ],

  // deploy: {
  //   production: {
  //     user: 'SSH_USERNAME',
  //     host: 'SSH_HOSTMACHINE',
  //     ref: 'origin/master',
  //     repo: 'GIT_REPOSITORY',
  //     path: 'DESTINATION_PATH',
  //     'pre-deploy-local': '',
  //     'post-deploy':
  //       'npm install && pm2 reload ecosystem.config.js --env production',
  //     'pre-setup': '',
  //   },
  // },
}
