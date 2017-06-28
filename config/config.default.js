'use strict';

module.exports = appInfo => {
  const config = {};

  // should change to your own
  config.keys = appInfo.name + '_1498629089627_273';

  // add your config here
  config.mysql = {
    client: {
      host: '47.93.36.115',
      port: '3306',
      user: 'sa',
      password: 'sa123',
      database: 'plank',
    },
    app: true,
    agent: false,
  };
  return config;
};
