/*
 * @Author: 'weixingwang01'
 * @Date: 2022-10-11 10:59:42
 * @LastEditors: unfetteredman
 * @LastEditTime: 2022-11-18 16:43:18
 */
import type { Context, Next } from 'koa';
import Joi from 'joi';

export const joiValidate = (schema: Joi.Schema) => async(ctx: Context, next: Next): Promise<any> => {
  try {
    const { error } = await schema.validateAsync(ctx.request.body);
    if (error) {
      return ctx.app.emit('error', error, ctx);
    }
    await next();
  } catch (error) {
    return ctx.app.emit('error', error, ctx);
  }
};
