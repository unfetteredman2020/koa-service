/*
 * @Author: unfetteredman
 * @Date: 2022-11-15 14:17:32
 * @LastEditors: unfetteredman
 * @LastEditTime: 2022-11-15 16:49:34
 */
namespace ResponseBody {
  export interface ResponseBodyResult {
    code: ServerCodeEnums,
    msg: string,
    result?: any
  }
}

type CreateResponseResults = {
  code: ServerCodeEnums,
  msg: string,
  result: any,
}

declare class Create {
  createResponseResult (code: ServerCodeEnums, msg: string, result: any) : CreateResponseResults
}

interface CreateResponseResultProps {
  code: ServerCodeEnums,
  msg: string,
  result?: any,
}

declare function createResponseResult (code: ServerCodeEnums, msg: string, result?: any) : CreateResponseResults

