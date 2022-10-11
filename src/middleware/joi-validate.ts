import { Context, Next } from 'koa';
import Joi from 'joi';

export const joiValidate = (schema: Joi.Schema) => async(ctx: Context, next: Next) => {
  try {
    const res = await schema.validate(ctx.request.query);
    console.log('ctx', res);
    await next();
  } catch (error) {
    ctx.app.emit('error', error, ctx);
  }
};
