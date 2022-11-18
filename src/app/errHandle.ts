/*
 * @Author: 'weixingwang01'
 * @Date: 2022-10-09 14:11:13
 * @LastEditors: unfetteredman
 * @LastEditTime: 2022-11-18 14:06:02
 */
import { Context } from 'koa';
import { errLogger } from '../log/log';

export const errHandle = (err: Error, ctx: Context) => {
  errLogger.error(err);
  console.log('-----------------Error Start--------------------');
  console.error(err);
  console.log('-----------------Error End--------------------');
  ctx.body = err;
};


