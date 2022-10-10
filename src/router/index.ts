/*
 * @Author: 'weixingwang01'
 * @Date: 2022-10-08 14:47:30
 * @LastEditors: 'weixingwang01@bianfeng.com'
 * @LastEditTime: 2022-10-09 10:06:43
 */
export {};

const fs = require('fs');
const path = require('path');
const KoaRouter = require('koa-router');
// const requireDirectory = require('require-directory');
const router = new KoaRouter();

try {
  const ps = path.resolve(__dirname, './modules/');
  fs.readdir(ps, 'utf8', (err:any, data:any[]) => {
    if (err) console.error('router error', err);
    data.forEach((file) => {
      const r = require(`${ps}/${file}`);
      router.use(r.routes());
    });
  });
} catch (error) {
  console.log('fs router file error', error);
}

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

module.exports = router;
