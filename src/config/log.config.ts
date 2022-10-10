/*
 * @Author: 'weixingwang01'
 * @Date: 2022-10-09 11:39:19
 * @LastEditors: 'weixingwang01@bianfeng.com'
 * @LastEditTime: 2022-10-09 13:58:45
 */
module.exports = {
  appenders: {
    console: {
      type: 'console',
    },
    success: {
      type: 'file',
      maxLogSize: 5 * 1000 * 1000, // 超过多少(byte)就切割
      backups: 100, // 保留旧日志数量(default: 5)
      // compress: true, // 缩成.gz格式
      filename: 'logs/success.log',
      pattern: '-yyyy-MM-dd-hh-mm',
      keepFileExt: true, // 切割的日志保留文件扩展名，false(默认):生成类似default.log.1文件;true:生成类似default.1.log
    },
    warn: {
      type: 'file',
      maxLogSize: 5 * 1000 * 1000, // 超过多少(byte)就切割
      backups: 100, // 保留旧日志数量(default: 5)
      // compress: true, // 缩成.gz格式
      filename: 'logs/warn.log',
      pattern: '-yyyy-MM-dd-hh-mm',
      keepFileExt: true, // 切割的日志保留文件扩展名，false(默认):生成类似default.log.1文件;true:生成类似default.1.log
    },
    errors: {
      type: 'dateFile',
      filename: 'logs/errors.log',
      // alwaysIncludePattern: true, // 代表在最新的一个日志文件里追加日志(默认是在errors.log文件写入内容)
      // daysToKeep: 0, // 大于0则会删除x天之前的日志
      pattern: '-yyyy-MM-dd', // yyyy-MM-dd-hh-mm=>每分钟切割一次 yyyy-mm-dd-hh =>每小时
      keepFileExt: true,
    },
  },
  categories: {
    default: { appenders: ['console'], level: 'all' },
    success: { appenders: ['success'], level: 'all' },
    warn: { appenders: ['warn'], level: 'warn' },
    errors: { appenders: ['errors'], level: 'error' },
  },
};
