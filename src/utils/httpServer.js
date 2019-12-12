/**
 * http 请求
 * put 、 post 的区别（PUT请求：如果两个请求相同，后一个请求会把第一个请求覆盖掉。Post请求：后一个请求不会把第一个请求覆盖掉。）
 */

import Axios from 'axios';
import Qs from 'qs';
import GlobalDataUtils from './globalDataUtils';
import LocalStorageUtils from './localStorageUtils';

export default class HttpServer {

  /**
   * 获取基础地址
   */
  static getBaseUrl() {
    let baseURL = '';
    if (process.env.NODE_ENV == 'development') {
      baseURL = 'https://food.tym.com.cn:20004/zz.api';
    } else if (process.env.NODE_ENV == 'debug') {
      baseURL = 'https://food.tym.com.cn:20004/zz.api';
    } else if (process.env.NODE_ENV == 'production') {
      baseURL = 'https://food.tym.com.cn:20004/zz.api';
    }
    return baseURL;
  }

  /**
   * 获取后缀名
   * @param {*} filePath 
   */
  static getSuffixName(filePath) {
    let suffixName = '';
    if (!!filePath) {
      let index = filePath.lastIndexOf(".");
      if (index > -1) {
        var length = filePath.length + '';
        suffixName = (filePath.substring(index + 1, length)).toLowerCase();
      }
    }
    return suffixName;
  }

  /**
   * 根据后缀名获取上传类型接口
   * @param {*} suffixName 
   */
  static getUploadTypeApi(suffixName) {
    let uploadUrl = '';
    // 判断是否为图片类型，图片类型有特定上传接口
    let imageType = ['png', 'jpg', 'jpeg', 'bmp', 'gif', 'webp', 'psd', 'svg', 'tiff'];
    // 判断是否为音频类型，音频类型有特定上传接口
    let audioType = ['aac', 'mp3', 'wav', 'ogg'];
    if (imageType.indexOf(suffixName) !== -1) {
      uploadUrl = GlobalDataUtils.getGlobalUrl().uploadFile + '/api/file/uploadImage';
    } else if (audioType.indexOf(suffixName) !== -1) {
      uploadUrl = GlobalDataUtils.getGlobalUrl().uploadFile + '/api/file/upload/voice';
    } else {
      uploadUrl = GlobalDataUtils.getGlobalUrl().uploadFile + '/api/file/upload';
    }
    return uploadUrl;
  }

  /**
   * 处理响应数据
   * @param {*} response 
   * @param {*} fail 
   */
  static handleResponse(response, fail) {
    if (response.status) {
      if (response.code == '' || response.code == '200') {
        return true;
      }
      if (response.code == '201') {
        // Dialog.fail('没有权限请求！', {
        //   close: function () {
        //     Actions.reset('LoginPage', {
        //       isLoginOut: true
        //     });
        //   }
        // });
        return false;
      }
      if (response.code == '205') {
        // Dialog.fail('系统已过期！', {
        //   close: function () {
        //     Actions.reset('LoginPage', {
        //       isLoginOut: true
        //     });
        //   }
        // });
        return false;
      }
      if (response.code == '202' || response.code == '203') {
        // Dialog.fail('未登录或登录状态过期，请重新登录！', {
        //   close: function () {
        //     Actions.reset('LoginPage', {
        //       isLoginOut: true
        //     });
        //   }
        // });
        return false;
      }
      if (response.code == '204') {
        // Dialog.fail('检测你的帐号在别的地方登录，请重新登录！', {
        //   close: function () {
        //     Actions.reset('LoginPage', {
        //       isLoginOut: true
        //     });
        //   }
        // });
        return false;
      }
      let code = GlobalDataUtils.getCode(response.code);
      if (code) {
        // Dialog.fail(code.message);
        return false;
      }
      if (fail) {
        fail();
      }
      return false;
    } else {
      return false;
    }
  }

  /**
   * 处理上传响应数据
   * @param {*} response 
   */
  static handleUploadResponse(response) {
    if (response.status) {
      let uploadFileState = response.data.uploadResult.uploadFileState;
      if (uploadFileState == 'Success') {
        return true;
      }
      if (uploadFileState == 'FileExtensionInValid') {
        // Dialog.fail('上传文件格式不正确');
        return false;
      }
      if (uploadFileState == 'FileSizeTooMax') {
        // Dialog.fail('上传文件大小超过限制');
        return false;
      }
      if (uploadFileState == 'NotImageFormat') {
        // Dialog.fail('上传文件非图片格式');
        return false;
      }
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
        'zeus-token': LocalStorageUtils.getToken()
      },
      responseType: 'json',
      transformResponse: [function (data) {
        return data;
      }],
    });
    return instance;
  }

  /**
   * 创建上传实例
   * @param {*} settings {contentType,timeout、onUploadProgress}
   */
  static createUploadInstance(settings) {
    let options = {
      contentType: 'multipart/form-data',
      timeout: 30 * 1000,
      onUploadProgress: (progressEvent) => { }
    };
    options = Object.assign(options, settings);
    let instance = Axios.create({
      timeout: options.timeout,
      // TODO：自定义请求头信息失败
      // headers: {
      //   'Access-Control-Allow-Origin': '*',
      //   'Content-Type': options.contentType,
      //   'zeus-token': LocalStorageUtils.getToken()
      // },
      responseType: 'json',
      onUploadProgress: (progressEvent) => {
        if (progressEvent.total != 0) {
          let progress = progressEvent.loaded / progressEvent.total;
          progressEvent.progress = parseFloat(progress.toFixed(2));
        } else {
          progressEvent.progress = 0;
        }
        // console.log(progressEvent);
        // total：总大小、loaded：已上传大小、progress：上传进度
        options.onUploadProgress(progressEvent);
      }
    });
    return instance;
  }

  /**
   * 创建下载实例
   * @param {*} settings {contentType,timeout、onDownloadProgress}
   */
  // static createDownloadInstance(settings) {
  //   let options = {
  //     contentType: 'application/octet-stream',
  //     timeout: 30 * 1000,
  //     onDownloadProgress: () => { }
  //   };
  //   options = Object.assign(options, settings);
  //   let instance = Axios.create({
  //     baseURL: this.getBaseUrl(),
  //     timeout: options.timeout,
  //     headers: {
  //       'Access-Control-Allow-Origin': '*',
  //       'Content-Type': options.contentType,
  //       'zeus-token': LocalStorageUtils.getToken()
  //     },
  //     responseType: 'json',
  //     onDownloadProgress: (progressEvent) => {
  //       console.log(progressEvent);
  //       options.onDownloadProgress(progressEvent);
  //     }
  //   });
  //   return instance;
  // }

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

  /**
   * 并发请求
   * @param {*} urls {url,method,data}
   * @example
   */
  static async all(urls) {
    let requests = [];
    urls.forEach((request) => {
      if (typeof request == 'string') {
        requests.push(this.get(request));
      } else if (typeof request == 'object') {
        if (request.method == 'postJson') {
          requests.push(this.postJson(request.url, request.data));
        }
        if (request.method == 'post') {
          requests.push(this.post(request.url, request.data));
        }
        if (request.method == 'get') {
          requests.push(this.get(request.url, request.data));
        }
      }
    });
    try {
      let responseList = await Axios.all(requests);
      return new Promise((resolve, reject) => {
        resolve(responseList);
      });
    } catch (error) {
      console.log(error);
    }
  }

  /**
   * 上传 - 单个
   * @param {*} file
   * @param {*} settings {onUploadProgress}
   */
  static async upload(file, settings) {
    try {
      if (!!file) {
        let options = {
          onUploadProgress: () => { }
        };
        options = Object.assign(options, settings);
        let instance = this.createUploadInstance({
          onUploadProgress: options.onUploadProgress
        });
        let formData = new FormData();
        // 这里的 file 与后台相对应，不能改变
        formData.append('file', file);
        let suffixName = this.getSuffixName(file.name);
        let url = this.getUploadTypeApi(suffixName);
        let response = await instance.post(url, formData);
        let responseData = response.data;
        let status = this.handleUploadResponse(responseData);
        return new Promise((resolve, reject) => {
          if (status) {
            resolve(responseData.data);
          } else {
            resolve();
          }
        });
      }
    } catch (error) {
      console.log(error);
    }
  }

  /**
   * 上传 - 多个
   * @param {*} files 
   * @param {*} settings 
   */
  static async uploads(files, settings) {

  }


}