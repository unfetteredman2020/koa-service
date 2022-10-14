/*
 * @Author: unfetteredman
 * @Date: 2022-10-13 15:25:24
 * @LastEditors: weixw2014@qq.com
 * @LastEditTime: 2022-10-14 17:52:48
 */
import { Context } from 'koa';
import UserService from '@/service/user.service';
import { PasswordError, LoginError, LoginSuccess } from '@/responseResult/User/loginResponseResult';
import JwtConf from '@/config/jwt.config';

class UserController {
  async loginController(ctx: Context) {
    try {
      const { username } = ctx.request.body;
      const { password, ...res } = await UserService.findUser({ username });
      if (res.username !== username || password !== ctx.request.body.password) {
        return (ctx.body = PasswordError);
      }
      const token = JwtConf.singUserToken(res, ctx);
      LoginSuccess.result = { token };
      ctx.state = res;
      return (ctx.body = LoginSuccess);
    } catch (error) {
      console.error('LoginError', error);
      LoginError.result = error;
      return ctx.app.emit('error', LoginError, ctx);
    }
  }
}

export default new UserController();
