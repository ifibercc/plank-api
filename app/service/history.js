'use strict';

module.exports = app => {
  return class History extends app.Service {
    * create(record) {
      const result = yield app.mysql.insert('history', record);
      return result;
    }
  };
};
