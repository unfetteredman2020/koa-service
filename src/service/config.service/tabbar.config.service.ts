/*
 * @Author: unfetteredman
 * @Date: 2022-11-14 17:01:37
 * @LastEditors: unfetteredman
 * @LastEditTime: 2022-11-15 10:28:25
 */
import TabbarConfigModel from '@/model/config.model/tabbar.config.model';

type SetTabbarParams = {
  list: string
}

class TabbarConfigService {
  get():Promise<any> {
    return TabbarConfigModel.findOne({
      order: [
        ['createdAt', 'desc']
      ]
    });
  }

  set(list: SetTabbarParams) {
    console.log('list', list);
    return TabbarConfigModel.create(list);
  }
}

export default new TabbarConfigService();
