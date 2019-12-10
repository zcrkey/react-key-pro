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

  /**
   * 初始化全局数据
   */
  static async init(data) {
    GlobalData.codes = data.codes;
    GlobalData.dictTypes = data.dictTypes;
    GlobalData.enums = data.enums;
    GlobalData.url = {
      uploadFile: data.uploadFileUrl,
      websocket: data.websocket
    };
  }

  /**
   * 获取全局URL
   */
  static getGlobalUrl() {
    if (!!GlobalData.url) {
      return GlobalData.url;
    } else {
      return {};
    }
  }

}