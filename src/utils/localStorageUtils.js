export default class LocalStorageUtils {

  // 令牌
  static TOKEN = 'token';

  /**
   * 设置token
   * @param {*} token 
   */
  static setToken(token) {
    localStorage.setItem(this.TOKEN, token);
  }

  /**
   * 获取token
   * @param {*} token 
   */
  static getToken() {
    return localStorage.getItem(this.TOKEN);
  }

  /**
   * 移除token
   */
  static removeToken() {
    localStorage.removeItem(this.TOKEN);
  }

}