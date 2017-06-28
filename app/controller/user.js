'use strict';

exports.info = function* (ctx) {
  const userInfo = JSON.parse(ctx.query.userInfo);
  const user = yield ctx.service.user.findByNickName(userInfo.nickName);
  if (user === null) {
    const result = yield ctx.service.user.createUser(userInfo);
    ctx.body = result.insertId;
  } else {
    ctx.body = user.id;
  }
};
