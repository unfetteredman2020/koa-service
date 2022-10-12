import { Context, Next } from 'koa';
import Joi from 'joi';

export const joiValidate = (schema: Joi.Schema) => async(ctx: Context, next: Next) : Promise<any> => {
  try {
    console.log('ctx.request.body', ctx.request);
    const { error } = await schema.validate(ctx.request.body);
    if (error) {
      return ctx.app.emit('error', error, ctx);
    }
    await next();
  } catch (error) {
    console.log('joiValidate error', error);
    ctx.app.emit('error', error, ctx);
  }
};
