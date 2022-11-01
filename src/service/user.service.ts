/*
 * @Author: unfetteredman
 * @Date: 2022-10-13 15:25:39
 * @LastEditors: weixw2014@qq.com
 * @LastEditTime: 2022-11-01 10:02:40
 */
import { Op } from 'sequelize';
import User from '@/model/user.model';

interface FindUser {
  username?: string;
  user_id?: string;
}

class UserService {
  public static async findUser(params: FindUser): Promise<any> {
    const res = await User.findOne({
      where: {
        [Op.and]: {
          ...params,
        },
      },
    });
    return res;
  }
}

export default UserService;
