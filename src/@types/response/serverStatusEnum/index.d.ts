/*
 * @Author: unfetteredman
 * @Date: 2022-11-03 15:14:32
 * @LastEditors: unfetteredman
 * @LastEditTime: 2022-11-15 14:10:33
 */
declare const enum ServerCodeEnums {
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

