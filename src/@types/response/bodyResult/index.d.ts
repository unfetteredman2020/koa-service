/*
 * @Author: unfetteredman
 * @Date: 2022-11-15 14:17:32
 * @LastEditors: unfetteredman
 * @LastEditTime: 2022-11-18 16:10:12
 */
namespace ResponseBody {
  export interface ResponseBodyResult {
    code: ResponseCodeEnums,
    msg: string,
    result?: any
  }
}

type CreateResponseResultProps = {
  code: ResponseCodeEnums,
  msg: string,
  result?: any,
}

