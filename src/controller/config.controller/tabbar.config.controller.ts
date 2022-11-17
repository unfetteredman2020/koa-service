/*
 * @Author: unfetteredman
 * @Date: 2022-11-14 16:47:27
 * @LastEditors: unfetteredman
 * @LastEditTime: 2022-11-15 13:29:46
 */
import { Context, Next } from 'koa';
import TabbarSevice from '@/service/config.service/tabbar.config.service';

interface GetTypes {
  list: string
}

class ConfigController {
  tabbar: any;

  constructor() {
    this.tabbar = [];
  }

  public async get(ctx: Context, next: Next) {
    try {
      const res:GetTypes = await TabbarSevice.get();
      ctx.body = {
        list: res && JSON.parse(res.list)
      };
      next();
    } catch (error) {
      ctx.body = error;
    }
  }

  public async set(ctx: Context) {
    try {
      const { list } = ctx.request.body;
      const res = await TabbarSevice.set({ list: list && JSON.stringify(list) });
      ctx.body = res;
    } catch (error) {
      ctx.body = error;
    }
  }
}

export default new ConfigController();
