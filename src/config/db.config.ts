/*
 * @Author: 'weixingwang01'
 * @Date: 2022-10-09 10:44:10
 * @LastEditors: weixw2014@qq.com
 * @LastEditTime: 2022-10-14 17:40:15
 */
import { Sequelize } from 'sequelize';

const { DB_PORT, DB_HOST, DB_DATABASENAME, DB_USERNAME, DB_PASSWORD } = process.env;
// console.log('DB_PASSWORD', process.env);
const sequelize = new Sequelize(DB_DATABASENAME, DB_USERNAME, DB_PASSWORD, {
  host: DB_HOST,
  port: Number(DB_PORT),
  dialect: 'mysql', /* 选择 'mysql' | 'mariadb' | 'postgres' | 'mssql' 其一 */
  pool: { // 连接池
    max: 10, // 最多有10个连接
    min: 0, // 最少有0个连接
    idle: 10000, // 当前连接超过10秒没有操作就断开连接
    acquire: 30000, // 超过30秒没有连接成功就断开
  },
  query: {
    raw: true
  }
});

// try {
//   (async() => {
//     await sequelize.authenticate();
//     console.log('Connection has been established successfully.');
//   })();
// } catch (error) {
//   console.error('Unable to connect to the database:', error);
// }

export default sequelize;
