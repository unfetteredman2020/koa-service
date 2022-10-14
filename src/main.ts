/*
 * @Author: 'weixingwang01'
 * @Date: 2022-10-08 11:14:55
 * @LastEditors: 'weixw2014@qq.com'
 * @LastEditTime: 2022-10-09 11:53:46
 */
require('dotenv').config();
require('@babel/register');
require('module-alias/register');
// import * as dotenv from 'dotenv';
require('./app/app');

// dotenv.config({ path: '../*.env' });

// console.log('first', process.env.PORT);
