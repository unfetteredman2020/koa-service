/*
 * @Author: 'weixingwang01'
 * @Date: 2022-10-09 11:46:36
 * @LastEditors: 'weixingwang01@bianfeng.com'
 * @LastEditTime: 2022-10-09 13:16:28
 */
import Koa, { DefaultContext, DefaultState } from 'Koa';

const path = require('path');
const koaBody = require('koa-body');
const koaStatic = require('koa-static');
const parameter = require('koa-parameter'); // 参数校验
const koaCors = require('@koa/cors');
const { koaSwagger } = require('koa2-swagger-ui');


const router = require('@/router/index');
const { errHandle } = require('./errHandle');
const { logger, errLogger } = require('../log/log');

const app: Koa<DefaultState, DefaultContext> = new Koa();

app.on('error', errHandle);

app.use(koaStatic(path.join(__dirname, '../../public')));

app.use(logger);

app.use(
  koaSwagger({
    routePrefix: '/swagger/index.html', // 这里配置swagger的访问路径
    swaggerOptions: {
      url: '/swagger/swagger.json', // 这里配置swagger的文档配置URL，也就是说，我们展示的API都是通过这个接口生成的。
    },
  }),
);

app.use(koaBody({
  multipart: true,
  jsonLimit: '5mb',
  formidable: {
    uploadDir: path.join(__dirname, '../../public/upload/img'),
    keepExtensions: true
  },
  parsedMethods: ['POST', 'PUT', 'PATCH', 'GET', 'DELETE'],
  onError: (err:any) => {
    console.log('onError error:', err);
    errLogger.error(err);
  }
}));

app.use(koaCors({
  allowMethods: ['GET', 'POST', 'OPTIONS', 'DELETE'],
  allowHeaders: ['Content-Type', 'Authorization', 'Accept', 'X-Requested-With'],
}));

app.use(parameter(app));

app.use(router.routes());

app.use(router.allowedMethods({
  throw: true, // 抛出错误，代替设置响应头状态
  notImplemented: () => '不支持当前请求所需要的功能',
  methodNotAllowed: () => '不支持的请求方式'
}));

app.listen(3000, () => {
  console.log('服务启动成功，running http://127.0.0.1:3000');
});