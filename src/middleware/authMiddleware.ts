/*
 * @Author: unfetteredman
 * @Date: 2022-10-14 13:08:14
 * @LastEditors: unfetteredman
 * @LastEditTime: 2022-11-18 16:21:42
 */
import JWT from 'jsonwebtoken';
import { Context, Next } from 'koa';
import Creator from '@/utils/create';

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
        return ctx.app.emit('error', Creator.createResponseResult(ResponseCodeEnums.ParamsError, '用户token参数错误', null), ctx);
      }
      const token = authorization.replace('Bearer ', '');
      JWT.verify(token, SECRETKEY);
      await next();
    } catch (error: any) {
      switch (error.name) {
        case 'TokenExpiredError': // 过期token
          console.error('TokenExpiredError', error);
          return ctx.app.emit('error', Creator.createResponseResult(ResponseCodeEnums.AuthError, 'token过期', `${error}`), ctx);
        case 'JsonWebTokenError': // token 错误
          console.error('JsonWebTokenError', error);
          return ctx.app.emit('error', Creator.createResponseResult(ResponseCodeEnums.AuthError, 'token 错误', `${error}`), ctx);
        default:
          return ctx.app.emit('error', Creator.createResponseResult(ResponseCodeEnums.AuthError, 'token 错误', `${error}`), ctx);
      }
    }
  }
}

export default new AuthMiddleware();
