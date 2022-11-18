/*
 * @Author: unfetteredman
 * @Date: 2022-11-03 15:14:32
 * @LastEditors: unfetteredman
 * @LastEditTime: 2022-11-18 16:14:52
 */
declare const enum ServerStatusEnums {
  Success = 200, // 资源请求成功
  EverRedirect = 301, // everReidrect 永久重定向
  TempRedirect = 302, // 临时重定向
  ParamsError = 400, // 请求错误（参数错误 or XXX
  AuthError = 401, // 授权错误，身份验证失败
  ServerRefuseError = 403, // 服务器拒绝方法
  EmptyError = 404, // 获取资源错误
  StopVisitError = 405, // 方法禁用，禁用请求中指定方法
  TimeOutError = 408, // 服务器等会请求超时
  SourceNotExist = 410, // 资源已经删除
  BodyOverstep = 413, // 请求体过大
  ServerError = 500, // 服务器错误
}

declare const enum ResponseCodeEnums {
  Success = 200,
  AuthError = 4001, // 授权错误，身份验证失败；
  ParamsError = 4000, // 参数错误；
  DBError = 5001, // 数据库错误；
  AppError = 5000, // 程序错误；
  CatchError = 40004, // catch error
}
