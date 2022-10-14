/*
 * @Author: unfetteredman
 * @Date: 2022-10-13 15:25:39
 * @LastEditors: weixw2014@qq.com
 * @LastEditTime: 2022-10-14 17:40:22
 */
/* eslint-disable no-return-await */
import { Op } from 'sequelize';
import User from '@/model/user.model';

interface FindUser {
  username?: string,
  user_id?: string,
}

class UserService {
  public static async findUser(params: FindUser) : Promise<any> {
    return await User.findOne({
      where: {
        [Op.and]: {
          ...params
        }
      }
    });
  }
}

export default UserService;
