export default class LocalStorageUtils {

  // 令牌
  static TOKEN = 'token';

  // 令牌超时时间
  static TOKEN_TIMEOUT_TIME = 'token-timeout-time';

  /**
   * 设置token
   * @param {*} token 
   */
  static setToken(token) {
    // 令牌超时为两个小时后 
    let tokenTimeoutTime = new Date().getTime() + (2 * 60 * 60 * 1000);
    localStorage.setItem(this.TOKEN_TIMEOUT_TIME, tokenTimeoutTime);
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

  /**
   * 判断是否登录超时
   */
  static isLoginTimeout() {
    let token = this.getToken();
    let currentTime = new Date().getTime();
    let tokenTimeoutTime = localStorage.getItem(this.TOKEN_TIMEOUT_TIME);
    tokenTimeoutTime = tokenTimeoutTime || 1800000;
    if (token && tokenTimeoutTime > currentTime) {
      return false;
    } else {
      return true;
    }
  }

}