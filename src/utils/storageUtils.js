/**
 * 浏览器存储工具类
 * localStorage 没有时间限制的数据存储(永久存储)
 * sessionStorage 针对一个 session 的数据存储（关闭页面或浏览器后被清除）
 */
export default class StorageUtils {

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
    localStorage.removeItem(this.TOKEN_TIMEOUT_TIME);
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