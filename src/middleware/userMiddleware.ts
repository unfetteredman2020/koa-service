/*
 * @Author: unfetteredman
 * @Date: 2022-10-14 15:59:28
 * @LastEditors: weixw2014@qq.com
 * @LastEditTime: 2022-10-14 16:57:38
 */
import { Context, Next } from 'koa';
import UserService from '@/service/user.service';
import { UserNotExistError } from '@/responseResult/User/loginResponseResult';

export const verifyUser = (isNext: boolean) => async(ctx: Context, next: Next): Promise<any> => {
  try {
    const { username } = ctx.request.body;
    const res = await UserService.findUser({ username });
    if (isNext && res) {
      return await next();
    }
    UserNotExistError.result = [];
    return ctx.body = UserNotExistError;
  } catch (error) {
    console.log('joiValidate error', error);
    UserNotExistError.result = error;
    ctx.app.emit('error', UserNotExistError, ctx);
  }
};
