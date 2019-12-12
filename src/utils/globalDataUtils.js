/**
 * 全局数据工具类
 */

import GlobalData from './globalData';

export default class GlobalDataUtils {

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

  /**
   * 获取 code
   * @param {*} codeNum 
   */
  static getCode(codeNum) {
    var codeObject = GlobalData.codes.find((code) => {
      return code.value == codeNum;
    });
    return codeObject;
  }

}