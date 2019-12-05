/**
 * 全局数据工具类
 */

import GlobalData from './globalData';

export default class GlobalDataUtils {

  /**
   * 设置token
   * @param {*} token 
   */
  static setToken(token) {
    GlobalData.token = token;
  }

  /**
   * 获取token
   * @param {*} token 
   */
  static getToken() {
    return GlobalData.token;
  }

}