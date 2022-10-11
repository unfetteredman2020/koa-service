/*
 * @Author: 'weixingwang01'
 * @Date: 2022-10-10 14:29:43
 * @LastEditors: 'weixingwang01@bianfeng.com'
 * @LastEditTime: 2022-10-10 15:54:48
 */
import { Context, Next } from 'koa';
import Router from 'koa-router';
import swaggerSpec from '../../config/swagger.config';

const router: Router = new Router();

router.prefix('/swagger');

// 通过路由获取生成的注解文件
router.get('/swagger.json', async(ctx: Context, next: Next) => {
  ctx.set('Content-Type', 'application/json');
  ctx.body = swaggerSpec;
  next();
});

export default router;
