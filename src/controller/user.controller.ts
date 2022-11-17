/*
 * @Author: unfetteredman
 * @Date: 2022-10-13 15:25:24
 * @LastEditors: unfetteredman
 * @LastEditTime: 2022-11-17 09:38:30
 */
import { Context } from 'koa';
import UserService from '@/service/user.service';
import JwtConf from '@/config/jwt.config';
import Creator from '@/utils/create';

class UserController {
  async loginController(ctx: Context) {
    try {
      const { username } = ctx.request.body;
      const { password, ...res } = await UserService.findUser({ username });
      if (res.username !== username || password !== ctx.request.body.password) {
        return (ctx.body = Creator.createResponseResult(ServerCodeEnums.ParamsError, '密码错误'));
      }
      const token = JwtConf.singUserToken(res, ctx);
      ctx.state = res;
      return ctx.body = createResponseResult(ServerCodeEnums.Success, '登录成功', { token });
    } catch (error) {
      console.error('LoginError', error);
      return ctx.app.emit('error', createResponseResult(ServerCodeEnums.ParamsError, '用户登录失败，请稍后重试', error), ctx);
    }
  }
}

export default new UserController();

