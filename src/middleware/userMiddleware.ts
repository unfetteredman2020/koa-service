/*
 * @Author: unfetteredman
 * @Date: 2022-10-14 15:59:28
 * @LastEditors: unfetteredman
 * @LastEditTime: 2022-11-18 16:25:29
 */
import { Context, Next } from 'koa';
import UserService from '@/service/user.service';
import Creator from '@/utils/create';

export const verifyUser = (isNext: boolean) => async(ctx: Context, next: Next): Promise<any> => {
  try {
    const { username } = ctx.request.body;
    const res = await UserService.findUser({ username });
    if (isNext && res) {
      return await next();
    }
    return ctx.app.emit('error', Creator.createResponseResult(ResponseCodeEnums.ParamsError, '用户不存在', null), ctx);
  } catch (error) {
    ctx.app.emit('error', Creator.createResponseResult(ResponseCodeEnums.ParamsError, '查找用户失败！', error), ctx);
  }
};
