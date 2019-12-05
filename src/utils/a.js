import axios from 'axios';
import Dialog from '../dialog';
import GlobalDataUtils from '../utils/GlobalDataUtils'
import qs from 'qs';
import ConfigUrl from './configUrl';

var AjaxRequest = function (settings) {
  var options = {
    prev: function () { },
    finish: function () { },
    error: function () { }
  };
  options = Object.assign(options, settings);
  this.requestOptions = options;
}

AjaxRequest.prototype = {
  createInstance: function (settings) {
    var options = {
      contentType: 'application/json',//application/x-www-form-urlencoded
      timeout: 30 * 1000,
    };
    options = Object.assign(options, settings);
    var instance = axios.create({
      baseURL: ConfigUrl.getBaseUrl(),
      timeout: options.timeout,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': options.contentType,
        'zeus-token': GlobalDataUtils.getToken()
      },
      responseType: 'json',
      transformResponse: [function (data) {
        // console.log(data)
        return data;
      }],
    });
    return instance;
  },
  createUploadInstance: function (settings) {
    var options = {
      contentType: 'multipart/form-data',//application/x-www-form-urlencoded
      timeout: 60 * 1000,
      uploadProgress: function () {
      }
    };
    options = Object.assign(options, settings);
    var instance = axios.create({
      timeout: options.timeout,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': options.contentType,
        'zeus-token': GlobalDataUtils.getToken(),
        'platform': 'android'
      },
      responseType: 'json',
      onUploadProgress: progressEvent => {
        if (progressEvent.loaded == 0 || progressEvent.total == 0) {
          options.uploadProgress(0);
        }
        else {
          let complete = progressEvent.loaded / progressEvent.total;
          complete = parseFloat(complete.toFixed(2))
          options.uploadProgress(complete);
        }
      }
    });
    return instance;
  },
  handleResponse: function (response, success, fail) {
    if (response.status) {
      if (response.code == '' || response.code == '200') {
        if (success) {
          success(response.data);
        }
        return true;
      }
      if (response.code == '201') {
        Dialog.fail('没有权限请求！', {
          close: function () {
            Actions.reset('LoginPage', {
              isLoginOut: true
            });
          }
        });
        return false;
      }
      if (response.code == '205') {
        Dialog.fail('系统已过期！', {
          close: function () {
            Actions.reset('LoginPage', {
              isLoginOut: true
            });
          }
        });
        return false;
      }
      if (response.code == '202' || response.code == '203') {
        Dialog.fail('未登录或登录状态过期，请重新登录！', {
          close: function () {
            Actions.reset('LoginPage', {
              isLoginOut: true
            });
          }
        });

        return false;
      }
      if (response.code == '204') {
        Dialog.fail('检测你的帐号在别的地方登录，请重新登录！', {
          close: function () {
            Actions.reset('LoginPage', {
              isLoginOut: true
            });
          }
        });
        return false;
      }
      let code = GlobalDataUtils.getCode(response.code);
      if (code) {
        Dialog.fail(code.message);
        return false;
      }
      if (fail) {
        fail();
      }
      return false;
    }
    else {
      if (fail) {
        fail();
      }
      return false;
    }
  },
  initOptions: function (settings) {
    var options = {
      success: function () { }
    };
    return Object.assign(options, settings);
  },
  start: function (promise, options) {
    var self = this;
    self.requestOptions.prev();
    promise.then(function (response) {
      var responseData = response.data;
      self.requestOptions.finish();
      self.handleResponse(responseData, options.success, self.requestOptions.error);
    }).catch(function (error) {
      console.log(error);
      self.requestOptions.finish();
      self.requestOptions.error();
    });
  },
  get: function (url, settings) {
    var self = this;
    var options = this.initOptions(settings);
    var instance = this.createInstance();
    self.start(instance.get(url), options);
  },
  post: function (url, postData, settings) {
    var self = this;
    var options = this.initOptions(settings);
    var instance = this.createInstance({
      contentType: 'application/x-www-form-urlencoded'
    });
    self.start(instance.post(url, qs.stringify(postData)), options);
  },
  postJson: function (url, postData, settings) {
    var self = this;
    var options = this.initOptions(settings);
    var instance = this.createInstance();
    if (url.endsWith('search')) {
      if (!postData.regionNo) {
        let loginUser = GlobalDataUtils.getLoginUser();
        postData.regionNo = loginUser.regionNo;
      }
    }
    self.start(instance.post(url, postData), options);
  },

  postFile: function (filePath, settings) {
    let self = this;
    let options = {
      success: function () { },
      uploadProgress: function () { }
    };
    options = Object.assign(options, settings);
    let postFileOptions = {
      success: function (data) {
        if (data.uploadResult.uploadFileState == 'FileExtensionInValid') {
          Dialog.fail('上传文件格式不正确');
          return;
        }
        if (data.uploadResult.uploadFileState == 'FileSizeTooMax') {
          Dialog.fail('上传文件大小超过限制');
          return;
        }
        if (data.uploadResult.uploadFileState == 'NotImageFormat') {
          Dialog.fail('上传文件非图片格式');
          return;
        }
        if (data.uploadResult.uploadFileState == 'Success') {
          options.success(data);
          return;
        }
      }
    };
    const formData = new FormData();
    // 文件后缀名
    let suffixName = 'jpg';
    if (filePath != null && filePath != "") {
      let index = filePath.lastIndexOf(".");
      if (index > -1) {
        suffixName = (filePath.substr(index + 1)).toLowerCase();
      }
    }
    let timestamp = Date.parse(new Date());
    const file = { uri: filePath, type: "multipart/form-data", name: timestamp + "." + suffixName };   // 这里的key(uri和type和name)不能改变,
    formData.append('file', file);   // 这里的files就是后台需要的key
    let instance = this.createUploadInstance({
      uploadProgress: options.uploadProgress
    });
    // 判断是否为图片类型，图片类型有特定上传接口
    let imageType = ['png', 'jpg', 'jpeg', 'bmp', 'gif', 'webp', 'psd', 'svg', 'tiff'];
    // 判断是否为音频类型，音频类型有特定上传接口
    let audioType = ['aac', 'mp3', 'wav', 'ogg'];
    // 判断是否为视频类型，视频类型有特定上传接口
    let videoType = ['mp4'];
    if (imageType.indexOf(suffixName) !== -1) {
      self.start(instance.post(GlobalDataUtils.getUrl().uploadFile + '/api/file/uploadImage', formData), postFileOptions);
    } else if (audioType.indexOf(suffixName) !== -1) {
      self.start(instance.post(GlobalDataUtils.getUrl().uploadFile + '/api/file/upload/voice', formData), postFileOptions);
    } else if (videoType.indexOf(suffixName) !== -1) {
      self.start(instance.post(GlobalDataUtils.getUrl().uploadFile + '/api/file/upload/video', formData), postFileOptions);
    } else {
      self.start(instance.post(GlobalDataUtils.getUrl().uploadFile + '/api/file/upload', formData), postFileOptions);
    }
  },

  postFiles: function (filePaths, settings) {
    var self = this;
    var options = {
      success: function () { },
      finish: function () { },
      uploadProgress: function () { }
    };
    options = Object.assign(options, settings);
    self.attachments = [];
    self.postFileOptions = options;
    self.uploadFileIndex(0, filePaths);
  },

  uploadFileIndex: function (i, filePaths) {
    var self = this;
    if (i == filePaths.length) {
      self.postFileOptions.finish(self.attachments);
    } else {
      self.postFileOptions.uploadProgress(0, i);
      var filePath = filePaths[i];
      self.postFile(filePath,
        {
          success: function (data) {
            self.postFileOptions.success(i, data.uploadResult);
            self.attachments.push(data.uploadResult);
            self.uploadFileIndex(i + 1, filePaths);
          },
          uploadProgress: function (per) {
            self.postFileOptions.uploadProgress(per, i);
          }
        })
    }
  },
  setup: function (urls, settings) {
    var self = this;
    var options = this.initOptions(settings);
    var requests = [];
    urls.forEach(function (request) {
      if (typeof (request) == 'string') {
        let instance = self.createInstance();
        requests.push(instance.get(request));
      }
      if (typeof (request) == 'object') {
        if (request.method == 'post') {
          let instance = self.createInstance({
            contentType: 'application/x-www-form-urlencoded'
          });
          requests.push(instance.post(request.url, request.data));
        }
        if (!request.method || request.method == 'postJson') {
          let instance = self.createInstance();
          requests.push(instance.post(request.url, request.data));
        }
        if (request.method == 'get') {
          let instance = self.createInstance();
          requests.push(instance.get(request.url));
        }
      }
    });
    self.requestOptions.prev();
    axios.all(requests).then(function (responseList) {
      var datas = responseList.map(r => r.data);
      var isSuccess = true;
      for (var i = 0; i < datas.length; i++) {
        var responseData = datas[i];
        if (!self.handleResponse(responseData)) {
          isSuccess = false;
          break;
        }
      }
      self.requestOptions.finish();
      if (isSuccess) {
        options.success(datas.map(r => r.data));
      }
      else {
        self.requestOptions.error();
      }
    }).catch(function (error) {
      console.log(error);
      self.requestOptions.finish();
      self.requestOptions.error();
    });
  },

}

class Ajax {
  static get(settings) {
    var options = {
      text: '页面加载中',
      prev: function () { },
      finish: function () { },
      error: function () { }
    };
    options = Object.assign(options, settings);
    return new AjaxRequest({
      prev: function () {
        Dialog.loading({
          msg: options.text
        });
        options.prev();
      },
      finish: function () {
        Dialog.close();
        options.finish();
      },
      error: function () {
        Dialog.fail('网络加载失败，请稍后重试');
        options.error();
      }
    });
  };
  static getSimple(settings) {
    var options = {
      prev: function () { },
      finish: function () { },
      error: function () { }
    };
    options = Object.assign(options, settings);
    return new AjaxRequest(options);
  };

}

export default Ajax;



