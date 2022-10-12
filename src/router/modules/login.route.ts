
/*
 * @Author: 'weixingwang01'
 * @Date: 2022-10-08 14:47:46
 * @LastEditors: 'weixw2014@qq.com'
 * @LastEditTime: 2022-10-12 10:28:47
 */
import Router from 'koa-router';
import { Next, Context } from 'koa';
import { joiValidate } from '@/middleware/joiValidateMiddleWare';
import { loginSchema } from '@/joiValidator/login.validate';

const router: Router = new Router();



/**
 * @swagger
 * /goods/upload:
 *    post:
 *      tags:
 *      - system_manager
 *      summary: 新增管理员信息
 *      consumes:
 *        - application/json
 *      parameters:
 *      - name: system_manager
 *        in: body
 *        description: 新增管理员信息
 *        schema:
 *          type: object
 *          required:
 *            - id
 *            - account
 *            - token
 *          properties:
 *            obj:
 *              type: object
 *              required:
 *                - account
 *                - name
 *                - phone
 *                - roleId
 *                - state
 *              description: 新增数据对象
 *              properties:
 *                name:
 *                  type: string
 *                  description: 管理员姓名  
 *                account:
 *                  type: string
 *                  description: 管理员账号
 *                state:
 *                  type: integer
 *                  description: 账号状态    
 *                phone:
 *                  type: string
 *                  description: 管理员联系方式   
 *                roleId:
 *                  type: integer
 *                  description: 管理员角色编码      
 *            account:
 *              type: string
 *              description: 当前登录用户账号
 *            token:
 *              type: string
 *              description: 当前登录用户Token
 *      responses:
 *        200:
 *          description: successful operation
 * */

router.post('/', (ctx: Context, next: Next) => {
  console.log('first2', ctx);
  // const { file } = ctx.request.files;
  const files = ctx.request.files.file;
  console.log('first', ctx.request.files);
  if (Array.isArray(files)) {
    console.log('array');
  }
  ctx.body = ctx;
  next();
});

router.post('/upload', joiValidate(loginSchema), (ctx: any, next: Next) => {
  console.log('first2', ctx);
  // const { file } = ctx.request.files;
  const files = ctx.request.files.file;
  if (Array.isArray(files)) {
    console.log('array');
  }
  ctx.body = ctx;
  next();
});
export default router;
