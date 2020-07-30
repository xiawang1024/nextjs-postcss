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

  deploy: {
    production: {
      user: 'root',
      host: '124.70.179.101',
      ref: 'origin/master',
      repo: 'git@github.com:xiawang1024/nextjs-postcss.git',
      path: '/root/www/next',
      'post-deploy':
        'cnpm install && pm2 reload ecosystem.config.js --env production',
    },
  },
}
