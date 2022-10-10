/*
 * @Author: 'weixingwang01'
 * @Date: 2022-10-10 14:29:43
 * @LastEditors: 'weixingwang01@bianfeng.com'
 * @LastEditTime: 2022-10-10 15:54:48
 */

export {};

const Router = require('koa-router');

const swaggerSpec = require('@/config/swagger.config');

const router = new Router();

router.prefix('/swagger');

// 通过路由获取生成的注解文件
router.get('/swagger.json', async(ctx: any) => {
  ctx.set('Content-Type', 'application/json');
  ctx.body = swaggerSpec;
});

module.exports = router;
