'use strict';

exports.add = function* (ctx) {
  const record = JSON.parse(ctx.query.record);
  const result = yield ctx.service.history.create(record);
  if (result) {
    ctx.body = {
      code: 200,
      msg: 'success',
      data: result.insertId,
    };
  } else {
    ctx.body = {
      code: 500,
    };
  }
};
