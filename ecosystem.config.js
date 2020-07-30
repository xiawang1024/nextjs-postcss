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
      user: 'xiawang1024',
      host: ['35.200.12.114'],
      ref: 'origin/master',
      repo: 'git@github.com:xiawang1024/nextjs-postcss.git',
      path: '~/www/next',
      'post-deploy':
        'npm install && npm run build && pm2 reload ecosystem.config.js --env production',
    },
  },
}
