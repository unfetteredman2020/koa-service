/*
 * @Author: 'weixingwang01'
 * @Date: 2022-10-09 11:46:36
 * @LastEditors: weixw2014@qq.com
 * @LastEditTime: 2022-11-01 17:46:37
 */
import Koa, { DefaultContext, DefaultState, Context } from 'Koa';
import router from '@/router/index';
import path from 'path';


const koaBody = require('koa-body');
const koaStatic = require('koa-static');
const parameter = require('koa-parameter'); // 参数校验
const koaCors = require('@koa/cors');
const { koaSwagger } = require('koa2-swagger-ui');

const { errHandle } = require('./errHandle');
const { logger, errLogger } = require('../log/log');

const app: Koa<DefaultState, DefaultContext> = new Koa();

const { PORT } = process.env;

app.on('error', errHandle);

app.use(koaStatic(path.join(__dirname, '../../public')));

app.use(logger);

app.use(
  koaSwagger({
    routePrefix: '/swagger/index.html', // 这里配置swagger的访问路径
    swaggerOptions: {
      url: '/swagger/swagger.json', // 这里配置swagger的文档配置URL，也就是说，我们展示的API都是通过这个接口生成的。
    },
  })
);

app.use(
  koaBody({
    multipart: true,
    jsonLimit: '5mb',
    formidable: {
      uploadDir: path.join(__dirname, '../../public/upload/img'),
      keepExtensions: true,
    },
    parsedMethods: ['POST', 'PUT', 'PATCH', 'GET', 'DELETE'],
    onError: (err: Error, ctx: Context) => {
      console.log('onError error:', err);
      errLogger.error(err);
      ctx.app.emit('err', err, ctx);
    },
  })
);

// 设置withCredentials为true时，Access-Control-Allow-Origin不能设置为*
app.use(
  koaCors({
    origin() {
      return '*';
    },
    exposeHeaders: ['Authorization'],
    maxAge: 5 * 24 * 60 * 60,
    allowMethods: ['GET', 'POST', 'OPTIONS', 'DELETE'],
    allowHeaders: ['Content-Type', 'Authorization', 'Accept', 'X-Requested-With'],
  })
);

app.use(parameter(app));

app.use(router.routes());

app.use(
  router.allowedMethods({
    throw: true, // 抛出错误，代替设置响应头状态
    notImplemented: () => '不支持当前请求所需要的功能',
    methodNotAllowed: () => '不支持的请求方式',
  })
);

app.listen(PORT, () => {
  console.log('服务启动成功，running http://127.0.0.1:3000');
});
