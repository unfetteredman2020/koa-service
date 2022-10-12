/*
 * @Author: 'weixingwang01'
 * @Date: 2022-10-12 09:44:21
 * @LastEditors: 'weixw2014@qq.com'
 * @LastEditTime: 2022-10-12 11:00:40
 */
import * as Koa from 'koa';

interface CustomRequest extends Request {
  files?: object | [],
}

declare module 'koa' {

  interface DefaultContext {
    files?: []
  }
}

