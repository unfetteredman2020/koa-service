/*
 * @Author: 'weixingwang01'
 * @Date: 2022-10-12 09:44:21
 * @LastEditors: 'weixingwang01@bianfeng.com'
 * @LastEditTime: 2022-10-13 11:10:42
 */
import Koa = require('koa');

declare module 'koa' {
    interface Request {
        files?: any
    }
}
