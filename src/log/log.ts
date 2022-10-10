/*
 * @Author: 'weixingwang01'
 * @Date: 2022-10-09 11:41:28
 * @LastEditors: 'weixingwang01@bianfeng.com'
 * @LastEditTime: 2022-10-09 13:13:56
 */

const log4js = require('koa-log4');
const config = require('../config/log.config');


log4js.configure(config);

module.exports = {
  logger: log4js.koaLogger(log4js.getLogger('success'), { level: 'info' }),
  errLogger: log4js.getLogger('errors'),
  warnLogger: log4js.getLogger('warn')
};
