/*
 * @Author: unfetteredman
 * @Date: 2022-11-15 16:50:10
 * @LastEditors: unfetteredman
 * @LastEditTime: 2022-11-17 09:38:27
 */

class Creator extends Create {
  createResponseResult(code: ServerCodeEnums, msg: string, result?: any): CreateResponseResults {
    return { code, msg, result };
  }
}

export default new Creator();


