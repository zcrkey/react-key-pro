import GlobalData from './globalData';
/**
 * 全局数据工具类
 *
 * @export
 * @class GlobalDataUtils
 */
export default class GlobalDataUtils {

  /**
   * 初始化全局数据
   *
   * @static
   * @param {*} data
   * @memberof GlobalDataUtils
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
   *
   * @static
   * @returns {}
   * @memberof GlobalDataUtils
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
   *
   * @static
   * @param {*} codeNum
   * @returns {}
   * @memberof GlobalDataUtils
   */
  static getCode(codeNum) {
    var codeObject = GlobalData.codes.find((code) => {
      return code.value == codeNum;
    });
    return codeObject;
  }

}