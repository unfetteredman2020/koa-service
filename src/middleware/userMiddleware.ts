/*
 * @Author: unfetteredman
 * @Date: 2022-10-14 15:59:28
 * @LastEditors: unfetteredman
 * @LastEditTime: 2022-11-15 15:21:45
 */
import { Context, Next } from 'koa';
import UserService from '@/service/user.service';
import { UserNotExistError } from '@/responseResult/user/loginResponseResult';

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
    UserNotExistError.msg = '查找用户失败！';
    ctx.app.emit('error', UserNotExistError, ctx);
  }
};
