/*
 * @Author: 'weixingwang01'
 * @Date: 2022-10-11 16:54:09
 * @LastEditors: weixw2014@qq.com
 * @LastEditTime: 2022-10-14 16:38:57
 */
import Joi from 'joi';

export const loginSchema = Joi.object({
  username: Joi.string().alphanum().required(),
  password: Joi.string().alphanum().min(3).max(10)
    .required()
    .error(new Error('密码错误')),
  // age: Joi.number().min(18).max(35).required(),
  // createTime: Joi.date().timestamp('javascript').max('now').required()
});
