/*
 * @Author: 'weixingwang01'
 * @Date: 2022-10-09 10:44:10
 * @LastEditors: 'weixingwang01@bianfeng.com'
 * @LastEditTime: 2022-10-09 11:33:13
 */
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('koa', 'root', '123456', {
  host: 'localhost',
  dialect: 'mysql' /* 选择 'mysql' | 'mariadb' | 'postgres' | 'mssql' 其一 */
});

// try {
//   (async() => {
//     await sequelize.authenticate();
//     console.log('Connection has been established successfully.');
//   })();
// } catch (error) {
//   console.error('Unable to connect to the database:', error);
// }

module.exports = sequelize;
