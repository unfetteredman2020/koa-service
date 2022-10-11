/*
 * @Author: 'weixingwang01'
 * @Date: 2022-10-09 14:11:13
 * @LastEditors: 'weixingwang01@bianfeng.com'
 * @LastEditTime: 2022-10-10 16:14:36
 */


const { errLogger } = require('../log/log');

export const errHandle = (err: Error) => {
  errLogger.error(err);
  console.error('errHandle: ', err);
};

module.exports = {
  errHandle
};

