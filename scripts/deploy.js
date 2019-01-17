const deploy = require('eden-remote-deploy');
const deployConfig = require('../config/deploy.config.js');

const edenConfig = [{
  from: 'output/webroot/**',
  to: 'webroot/',
}];

const hostName = process.argv[2];

if (hostName && deployConfig[hostName]) {
  const { receiver } = deployConfig[hostName];
  console.info('Receiver:', receiver);
  deploy(edenConfig, receiver, deployConfig[hostName].root);
} else {
  console.error('请输入正确的部署机器名');
}
