/*
 * @Author: unfetteredman
 * @Date: 2022-10-10 13:49:39
 * @LastEditors: weixw2014@qq.com
 * @LastEditTime: 2022-10-14 17:08:07
 */
import JWT from 'jsonwebtoken';
import { Context } from 'koa';

const { SECRETKEY } = process.env;

class JWTAuth {
  public singUserToken(userInfo: object, ctx: Context) {
    try {
      return JWT.sign(userInfo, SECRETKEY, { expiresIn: '1d' });
    } catch (error) {
      console.log('error', error);
      return ctx.app.emit('error', error, ctx);
    }
  }
}

export default new JWTAuth();
