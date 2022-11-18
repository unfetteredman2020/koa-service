/*
 * @Author: unfetteredman
 * @Date: 2022-11-14 16:47:27
 * @LastEditors: unfetteredman
 * @LastEditTime: 2022-11-18 16:11:19
 */
import { Context } from 'koa';
import TabbarSevice from '@/service/config.service/tabbar.config.service';
import Creator from '@/utils/create';

// interface TabbarItem {
//   pagePath: string,
//   iconPath: string,
//   selectedIcon: string,
//   text: string
// }

// interface GetTypes {
//   list: TabbarItem[]
// }

class ConfigController {
  public async get(ctx: Context) {
    try {
      const { list, ...res } = await TabbarSevice.get();
      console.log('res :>> ', res);
      ctx.body = {
        ...res,
        list: JSON.parse(res.list)
      };
    } catch (error) {
      ctx.app.emit('error', Creator.createResponseResult(ResponseCodeEnums.CatchError, '获取tabbar配置失败了', error), ctx);
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
