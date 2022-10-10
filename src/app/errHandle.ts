
// import { Context } from 'koa';

const { errLogger } = require('../log/log');

export const errHandle = (err: any) => {
  errLogger.error(err);
  console.error('errHandle: ', err);
};

module.exports = {
  errHandle
};

