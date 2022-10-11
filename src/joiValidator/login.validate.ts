import Joi from 'joi';

export const loginSchema = Joi.object({
  userName: Joi.string().alphanum().required(),
  password: Joi.string().alphanum().min(3).max(10).required().error(new Error('密码错误')),
  // age: Joi.number().min(18).max(35).required(),
  // createTime: Joi.date().timestamp('javascript').max('now').required()
});
