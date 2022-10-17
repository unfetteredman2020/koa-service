/*
 * @Author: unfetteredman
 * @Date: 2022-10-13 15:20:04
 * @LastEditors: weixw2014@qq.com
 * @LastEditTime: 2022-10-14 18:20:13
 */
import { DataTypes } from 'sequelize';
import sequelize from '@/config/db.config';

const User = sequelize.define('user', {
  username: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  userId: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
  }
}, {
  paranoid: true
});

// try {
//   (async() => {
//     await User.sync({ force: true });
//   })();
// } catch (error) {
//   console.error(error);
// }

export default User;
