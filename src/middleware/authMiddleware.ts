/*
 * @Author: unfetteredman
 * @Date: 2022-10-14 13:08:14
 * @LastEditors: weixw2014@qq.com
 * @LastEditTime: 2022-10-14 16:21:16
 */
import JWT from 'jsonwebtoken';
import { Context, Next } from 'koa';
import { TokenExpiredError, TokenVerifyError, TokenError } from '@/responseResult/User/loginResponseResult';

const { SECRETKEY } = process.env;

class AuthMiddleware {
  async verifyToken(ctx: Context, next: Next): Promise<any> {
    try {
      const { authorization } = ctx.request.header;
      if (!authorization) {
        return ctx.app.emit('error', TokenError, ctx);
      }
      const token = authorization.replace('Bearer ', '');
      JWT.verify(token, SECRETKEY);
      await next();
    } catch (error: any) {
      switch (error.name) {
        case 'TokenExpiredError':
          console.error('TokenExpiredError', error);
          return ctx.app.emit('error', TokenExpiredError, ctx);
        case 'JsonWebTokenError':
          console.error('JsonWebTokenError', error);
          return ctx.app.emit('error', TokenVerifyError, ctx);
      }
    }
  }
}

export default new AuthMiddleware();
