
/*
 * @Author: 'weixingwang01'
 * @Date: 2022-10-08 14:47:46
 * @LastEditors: 'weixingwang01@bianfeng.com'
 * @LastEditTime: 2022-10-10 10:16:00
 */
const path = require('path');
const Router = require('koa-router');
const swaggerJSDoc = require('swagger-jsdoc'); //引入swagger-jsdoc

const router = new Router();

router.get('/', (ctx: any) => {
  ctx.body = ctx;
});
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

router.post('/goods/upload', (ctx: any, next: any) => {
  const { file } = ctx.request.files;
  const files = ctx.request.files.file;
  if (Array.isArray(files)) {
    console.log('array');
  }
  ctx.body = file;
  next();
});

module.exports = router;
