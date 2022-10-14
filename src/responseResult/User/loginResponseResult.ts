/*
 * @Author: unfetteredman
 * @Date: 2022-10-14 13:34:19
 * @LastEditors: weixw2014@qq.com
 * @LastEditTime: 2022-10-14 17:51:42
 */
import { ServerCodeEnums } from '@/@types/serverCodeEnum/index';

interface ResponseBodyCode {
  code: ServerCodeEnums,
  msg: string,
  result?: any
}

// token 参数缺失error
export const TokenExpiredError:ResponseBodyCode = {
  code: ServerCodeEnums.EmptyError,
  msg: 'token 过期',
  result: null
};

// token 错误
export const TokenVerifyError:ResponseBodyCode = {
  code: ServerCodeEnums.ParamsError,
  msg: 'token 验证失败',
  result: null
};

// token 过期
export const TokenError:ResponseBodyCode = {
  code: ServerCodeEnums.ParamsError,
  msg: 'token 参数错误',
  result: null
};

export const PasswordError:ResponseBodyCode = {
  code: ServerCodeEnums.ParamsError,
  msg: '密码错误',
  result: null
};

export const UserNotExistError:ResponseBodyCode = {
  code: ServerCodeEnums.ParamsError,
  msg: '用户不存在',
  result: null
};

export const LoginError:ResponseBodyCode = {
  code: ServerCodeEnums.ParamsError,
  msg: '用户登录失败，请稍后重试',
  result: null
};

export const LoginSuccess:ResponseBodyCode = {
  code: ServerCodeEnums.Success,
  msg: '登录成功',
  result: null
};

