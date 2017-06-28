'use strict';

module.exports = app => {
  return class User extends app.Service {
    * findByNickName(nickName) {
      const user = yield app.mysql.get('user', {
        nickName,
      });
      return user;
    }
    * createUser(userInfo) {
      const result = yield app.mysql.insert('user', Object.assign({}, userInfo, {
        registerDate: new Date(),
      }));
      return result;
    }
  };
};
