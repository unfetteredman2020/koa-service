/*
 * @Author: unfetteredman
 * @Date: 2022-11-14 16:44:18
 * @LastEditors: unfetteredman
 * @LastEditTime: 2022-11-14 18:07:21
 */

import Router from 'koa-router';
// import { Next, Context } from 'koa';
import configController from '@/controller/config.controller/tabbar.config.controller';

const router: Router = new Router({ prefix: '/config' });

router.get('/tabbar', configController.get);

router.post('/setTabbar', configController.set);


export default router;
