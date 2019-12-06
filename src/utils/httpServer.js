/**
 * http 请求
 */

import Axios from 'axios';
import Qs from 'qs';
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
   * @param {*} url 
   * @param {*} params 
   */
  static async get(url, params) {
    try {
      let instance = this.createInstance();
      let response = await instance.get(url, { params: params });
      let responseData = response.data;
      let status = this.handleResponse(responseData)
      return new Promise((resolve, reject) => {
        if (status) {
          resolve(responseData.data);
        } else {
          resolve();
        }
      });
    } catch (error) {
      console.log(error);
    }
  }

  /**
   * post 请求
   * @param {*} url 
   * @param {*} params 
   */
  static async post(url, params) {
    try {
      let instance = this.createInstance({
        contentType: 'application/x-www-form-urlencoded'
      });
      let response = await instance.post(url, Qs.stringify(params));
      let responseData = response.data;
      let status = this.handleResponse(responseData)
      return new Promise((resolve, reject) => {
        if (status) {
          resolve(responseData.data);
        } else {
          resolve();
        }
      });
    } catch (error) {
      console.log(error);
    }
  }

  /**
   * postJson 请求
   * @param {*} url 
   * @param {*} params 
   */
  static async postJson(url, params) {
    try {
      let instance = this.createInstance();
      let response = await instance.post(url, params);
      let responseData = response.data;
      let status = this.handleResponse(responseData)
      return new Promise((resolve, reject) => {
        if (status) {
          resolve(responseData.data);
        } else {
          resolve();
        }
      });
    } catch (error) {
      console.log(error);
    }
  }

}