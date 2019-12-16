# React

### 开发环境
* os: windows7
* node: v10.16.1
* npm: 6.9.0
* yarn: 1.21.0
* create-react-app: 3.2.0
* react: 16.10.2

### 开发流程

### 一、全局安装脚手架
  ```
  yarn add -g create-react-app
  ``` 

### 二、创建项目
  ```
  yarn init react-app react-key
  ```

### 三、引入scss，用于实现将scss转成css
  ```
  // 需安装python2.x版本 TODO:安装 node-sass 有时会出错，可能原因是下载文件下载不了
  //（或者在根目录下创建 .npmrc 文件，并写入 sass_binary_site=https://npm.taobao.org/mirrors/node-sass/ ）
  yarn add sass-loader node-sass --save-dev
  ```

### 四、引入react-router-dom，用于实现路由跳转
  ```
  yarn add react-router-dom --save
  ```
  * https://reacttraining.com/react-router/web/guides/quick-start
  * 路由嵌套
  * 路由跳转
  * 路由传参
  * 路由复用

### 五、引入FortAwesome/react-fontawesome图标库
  ```
  yarn add @fortawesome/fontawesome-svg-core
  yarn add @fortawesome/free-solid-svg-icons
  yarn add @fortawesome/react-fontawesome
  ```

  ```
  在 app.js 全局引入
  // 引入 fortawesome 图标库
  import { library } from '@fortawesome/fontawesome-svg-core';
  import { fas } from '@fortawesome/free-solid-svg-icons';
  // 全部引入
  library.add(fas);
  ```

### 六、引入 IconFont 图标库
  ```
  assets 文件夹中新建 iconfont 文件夹，下载相对应的 iconfont 图标库

  在 index.scss 引入
  @import "./assets/iconfont/iconfont.css"; // iconfont 图标库
  ```

### 七、引入 OpenLayers
  ```
  yarn add ol
  ```

### 八、开发模式、测试模式、产品模式
  ```
  // 模式：development、test、production
  console.log("__NODE___：" + process.env.NODE_ENV);
  ```

### 九、样式
  * 字体大小（font-size）建议用 rem 作为单位  12px = 0.12rem 14px = 0.14rem 以此类推
  * 局部样式
    ```
    样式文件命名： xxx.module.scss 或者 xxx.module.css
    引入 import xxx from 'xxx.module.scss';
    ```

### 十、引入 axios 库，封装http请求、引入 qs 库，序列化参数
  ```
  yarn add axios
  yarn add qs
  ```

### 十一、将 create-react-app 配置的 webpack.config 提取出来
  * 创建 init.js 脚本文件，每当运行 yarn install 后，就应该运行 init.js 脚本(修改 react-scripts 包下 scripts 的start.js 、build.js 文件)
  * webpack.config.js 提取到根目录下，可进行配置

### 十二、Visual Studio Code 调试 react 项目
  * Visual Studio Code 安装 Debugger for Chrome 插件
  * 项目根目录里建一个.vscode 文件夹，然后在里面建立一个launch.json 的文件，并写入以下代码
    ```
    {
      // 使用 IntelliSense 了解相关属性。 
      // 悬停以查看现有属性的描述。
      // 欲了解更多信息，请访问: https://go.microsoft.com/fwlink/?linkid=830387
      "version": "0.2.0",
      "configurations": [
        {
          "type": "chrome",
          "request": "launch",
          "name": "Launch Chrome",
          "url": "http://localhost:3000", // 启动项目的地址 
          "sourceMaps": true,
          "webRoot": "${workspaceFolder}",
          "skipFiles": [
            "node_modules/**"
          ],
          "sourceMapPathOverrides": {
            "webpack:///*": "${webRoot}/*"
          }
        }
      ]
    }
    ```

### jsdoc 注释文档
  * 安装 vs code 插件：Document This，快捷键：Ctrl+Alt+D,Ctrl+Alt+D
  * 安装依赖
  ```
    yarn add jsdoc --save-dev
    yarn add tui-jsdoc-template // 输出模板样式
  ```
  * jsdoc.config.js 配置文件(jsdoc.config.js)
  * 输出文档(jsdoc)
   ```
    // 1、-d 指定注释文档输出路径
    // 2、-c 告诉jsdoc自定义配置文件的位置
    // 3、-r 告诉jsdoc循环source.include文件夹的子目录
    jsdoc -c jsdoc.config.js -r
   ```

### 命名规则
  * 文件夹命名规则： aaa-bbb-ccc 方式方式
  * 文件命名规则： aaaBbbCcc 方式方式
  * 代码（变量、方法）：小写字母开头，驼峰式命名方式


### 暴露配置文件
  ```
  npm run eject
  ```

### 新增 webpack 打包配置项 TODO：待测试
  ```
  yarn add react-app-rewired --save-dev
  ```

### 需要实现的功能

#### 开发环境标识
#### 初始化样式(字体 rem 实现)
#### OpenLayers
#### 全局变量
#### 路由跳转（路由嵌套、路由跳转、路由传参、路由复用、路由拦截器）
#### http axios qs （get、post、postJson、all、upload、uploads、download）
#### redux react-redux redux-persist
#### eslint 暂时无法实现自定义（除非修改 create-react-app 内置 webpack 配置文件）
#### create-react-app 内置 webpack 配置文件提取出来
#### 多页面配置 other.html、other.js、App.other.js
#### jsdoc 注释文档
#### 按钮
#### 弹出层
#### 对话框
#### 树型控件
#### 表单控件
#### 表格控件