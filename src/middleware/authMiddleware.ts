/*
 * @Author: unfetteredman
 * @Date: 2022-10-14 13:08:14
 * @LastEditors: weixw2014@qq.com
 * @LastEditTime: 2022-10-26 13:59:26
 */
import JWT from 'jsonwebtoken';
import { Context, Next } from 'koa';
import { TokenExpiredError, TokenVerifyError, TokenError } from '@/responseResult/user/loginResponseResult';

const { SECRETKEY } = process.env;

class AuthMiddleware {
  /**
   * 
   * @param ctx 
   * @param next 
   * @returns 
   * @desc: token 校验中间件
   */
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
        case 'TokenExpiredError': // 过期token
          console.error('TokenExpiredError', error);
          TokenExpiredError.result = error;
          return ctx.app.emit('error', TokenExpiredError, ctx);
        case 'JsonWebTokenError': // token 错误
          console.error('JsonWebTokenError', error);
          TokenVerifyError.result = error;
          return ctx.app.emit('error', TokenVerifyError, ctx);
        default:
          TokenVerifyError.result = error;
          return ctx.app.emit('error', TokenVerifyError, ctx);
      }
    }
  }
}

export default new AuthMiddleware();
