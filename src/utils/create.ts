/*
 * @Author: unfetteredman
 * @Date: 2022-11-15 16:50:10
 * @LastEditors: unfetteredman
 * @LastEditTime: 2022-11-18 16:11:16
 */

class Creator {
  createResponseResult(code: ResponseCodeEnums, msg: string, result?: any): CreateResponseResultProps {
    return { code, msg, result };
  }
}

export default new Creator();


