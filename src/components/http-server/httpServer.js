import axios from 'axios';

export default class HttpServer {

  /**
   * 获取基础地址
   */
  static getBaseUrl() {
    let baseURL = '';
    if (process.env.NODE_ENV == 'development') {
      baseURL = 'http://10.0.7.205:8080/demozz.api';
    } else if (process.env.NODE_ENV == 'debug') {
      baseURL = 'http://10.0.7.205:8080/demozz.api';
    } else if (process.env.NODE_ENV == 'production') {
      baseURL = 'http://10.0.7.205:8080/demozz.api';
    }
    return baseURL;
  }

  /**
   * 处理响应数据
   * @param {*} response 
   */
  static handleResponse(response) {

  }

  /**
   * 创建实例
   */
  static createInstance(settings) {
    let options = {
      contentType: 'application/json', // application/x-www-form-urlencoded
      timeout: 30 * 1000,
    };
    options = Object.assign(options, settings);
    let instance = axios.create({
      baseURL: this.getBaseUrl(),
      timeout: options.timeout,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': options.contentType,
        'zeus-token': '' // GlobalDataUtils.getToken()
      },
      responseType: 'json',
      transformResponse: [function (data) {
        return data;
      }],
    });
    return instance;
  }

  /**
   * get 请求
   */
  static get() {
  }

  /**
   * post 请求
   */
  static post() {

  }

  /**
   * postJson 请求
   */
  static postJson() {

  }

}