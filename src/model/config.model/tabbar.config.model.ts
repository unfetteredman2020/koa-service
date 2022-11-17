/*
 * @Author: unfetteredman
 * @Date: 2022-11-14 17:02:10
 * @LastEditors: unfetteredman
 * @LastEditTime: 2022-11-15 13:27:30
 */
import sequelize from '@/config/db.config';
import { DataTypes } from 'sequelize';

const TabbarConfig = sequelize.define('tabbarConfig', {
  tabbarId: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
  },
  list: {
    type: DataTypes.TEXT('long'),
    allowNull: false
  },
}, {
  timestamps: true
});

// try {
//   (async() => {
//     await TabbarConfig.sync({ force: true });
//   })();
// } catch (error) {
//   console.error(error);
// }

export default TabbarConfig;
