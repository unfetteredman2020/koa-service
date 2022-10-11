/*
 * @Author: 'weixingwang01'
 * @Date: 2022-10-09 14:11:13
 * @LastEditors: 'weixingwang01@bianfeng.com'
 * @LastEditTime: 2022-10-10 16:14:36
 */
import { Context } from 'koa';
import { errLogger } from '../log/log';

export const errHandle = (err: Error, ctx: Context) => {
  errLogger.error(err);
  ctx.body = err;
};


