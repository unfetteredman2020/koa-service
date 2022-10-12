/*
 * @Author: 'weixingwang01'
 * @Date: 2022-10-08 14:47:30
 * @LastEditors: 'weixw2014@qq.com'
 * @LastEditTime: 2022-10-11 14:16:13
 */
import { DefaultState, Context } from 'koa';
import Login from './modules/login.route';
import Swagger from './modules/swagger.route';

// const fs = require('fs');
// const path = require('path');
const KoaRouter = require('koa-router');
// const requireDirectory = require('require-directory');


const router = new KoaRouter<DefaultState, Context>();

router.use(Login.routes()).use(Swagger.routes());

// 通过fs读取module模块，循环导入加载模块，支持require语法
// try {
//   const ps = path.resolve(__dirname, './modules/');
//   fs.readdir(ps, 'utf8', (err:Error, data:[]) => {
//     if (err) console.error('router error', err);
//     data.forEach((file) => {
//       const r = require(`${ps}/${file}`);
//       router.use(r.routes());
//     });
//   });
// } catch (error) {
//   console.log('fs router file error', error);
// }

// requireDirectory 第三方库加载路由，支持require动态导入
// function whenLoadModule(obj: any) {
//   console.log('obj', obj);
//   if (obj instanceof KoaRouter) {
//     router.use(obj.routes(), obj.allowedMethods());
//   }
// }

// try {
//   const ps = path.resolve(__dirname, './modules/');
//   console.log('ps', ps);
//   const modules = requireDirectory(module, path.resolve(ps), { visit: whenLoadModule });
//   console.log('modules', modules);
// } catch (error) {
//   console.log('error', error);
// }

export default router;
