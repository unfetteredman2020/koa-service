/*
 * @Author: 'weixingwang01'
 * @Date: 2022-10-11 10:59:42
 * @LastEditors: weixw2014@qq.com
 * @LastEditTime: 2022-10-14 17:53:39
 */
import { Context, Next } from 'koa';
import Joi from 'joi';

export const joiValidate = (schema: Joi.Schema) => async(ctx: Context, next: Next): Promise<any> => {
  try {
    const { error } = await schema.validateAsync(ctx.request.body);
    if (error) {
      return ctx.app.emit('error', error, ctx);
    }
    await next();
  } catch (error) {
    console.log('joiValidate error', error);
    return ctx.app.emit('error', error, ctx);
  }
};
