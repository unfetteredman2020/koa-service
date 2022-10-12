/*
 * @Author: 'weixingwang01'
 * @Date: 2022-10-09 11:41:28
 * @LastEditors: 'weixw2014@qq.com'
 * @LastEditTime: 2022-10-09 13:13:56
 */

const log4js = require('koa-log4');
const config = require('../config/log.config');


log4js.configure(config);

export const logger = log4js.koaLogger(log4js.getLogger('success'), { level: 'info' });

export const errLogger = log4js.getLogger('errors');

export const warnLogger = log4js.getLogger('warn');

// export default {
//   logger: log4js.koaLogger(log4js.getLogger('success'), { level: 'info' }),
//   errLogger: log4js.getLogger('errors'),
//   warnLogger: log4js.getLogger('warn')
// };
