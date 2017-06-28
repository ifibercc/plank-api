'use strict';

module.exports = app => {
  app.get('/api/user', 'user.info');
};
