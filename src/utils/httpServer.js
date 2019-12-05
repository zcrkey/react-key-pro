/**
 * http 请求
 */

import Axios from 'axios';
import GlobalDataUtils from './globalDataUtils';

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
    if (response.status) {
      return true;
    } else {
      return false;
    }
  }

  /**
   * 创建实例
   * @param {*} settings {contentType,timeout}
   */
  static createInstance(settings) {
    let options = {
      contentType: 'application/json', // application/x-www-form-urlencoded
      timeout: 30 * 1000,
    };
    options = Object.assign(options, settings);
    let instance = Axios.create({
      baseURL: this.getBaseUrl(),
      timeout: options.timeout,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': options.contentType,
        'zeus-token': GlobalDataUtils.getToken()
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
  static async get(url, params) {
    try {
      debugger;
      let instance = this.createInstance();
      console.log(typeof instance);
      let response = await instance.get(url, { params: params });
      debugger;
      let responseData = response.data;
      let status = this.handleResponse(responseData)
      return new Promise((resolve, reject) => {
        if (status) {
          resolve({
            status: true,
            data: responseData.data
          });
        } else {
          resolve({
            status: false,
            data: {}
          });
        }
      });
    } catch (error) {
      console.log(error)
    }

    // https://www.jianshu.com/p/4168efdc172b
    // let instance = this.createInstance();
    // instance.get(url, { params: params }).then((response) => {
    //   let responseData = response.data;
    // }).catch((error) => {
    //   console.log(error);
    // })
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