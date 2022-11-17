/*
 * @Author: unfetteredman
 * @Date: 2022-10-14 13:34:19
 * @LastEditors: unfetteredman
 * @LastEditTime: 2022-11-15 15:16:06
 */


// token 参数缺失error
export const TokenExpiredError:ResponseBody.ResponseBodyResult = {
  code: ServerCodeEnums.EmptyError,
  msg: 'token 过期',
  result: null
};

// token 错误
export const TokenVerifyError:ResponseBody.ResponseBodyResult = {
  code: ServerCodeEnums.ParamsError,
  msg: 'token 验证失败',
  result: null
};

// token 过期
export const TokenError:ResponseBody.ResponseBodyResult = {
  code: ServerCodeEnums.ParamsError,
  msg: 'token 参数错误',
  result: null
};

export const PasswordError:ResponseBody.ResponseBodyResult = {
  code: ServerCodeEnums.ParamsError,
  msg: '密码错误',
  result: null
};

export const UserNotExistError:ResponseBody.ResponseBodyResult = {
  code: ServerCodeEnums.ParamsError,
  msg: '用户不存在',
  result: null
};

export const LoginError:ResponseBody.ResponseBodyResult = {
  code: ServerCodeEnums.ParamsError,
  msg: '用户登录失败，请稍后重试',
  result: null
};
