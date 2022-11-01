/*
 * @Author: 'weixingwang01'
 * @Date: 2022-10-08 14:47:46
 * @LastEditors: weixw2014@qq.com
 * @LastEditTime: 2022-10-26 13:48:12
 */
import Router from 'koa-router';
import { Next, Context } from 'koa';
import { joiValidate } from '@/middleware/joiValidateMiddleware';
import authMiddleWare from '@/middleware/authMiddleware';
import { loginSchema } from '@/joiValidator/user/login.validate';
import userController from '@/controller/user.controller';
import { verifyUser } from '@/middleware/userMiddleware';

const router: Router = new Router({ prefix: '/user' });

router.post('/login', joiValidate(loginSchema), verifyUser(true), userController.loginController);

router.get('/getUserInfo', authMiddleWare.verifyToken, (ctx: Context) => {
  ctx.body = ctx.query;
});

router.post('/upload', authMiddleWare.verifyToken, joiValidate(loginSchema), (ctx: Context, next: Next) => {
  const { file } = ctx.request.files;
  if (Array.isArray(file)) {
    console.log('array11');
  } else {
    console.log('object');
  }
  ctx.body = ctx;
  next();
});

export default router;
