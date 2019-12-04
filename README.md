# React

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
  yarn add sass-loader node-sass --save-dev
  ```

### 四、引入react-router-dom，用于实现路由跳转
  ```
  yarn add react-router-dom --save
  ```

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
#### 路由跳转（路由嵌套、路由传参、路由复用、路由拦截器）
#### http
#### 按钮
#### 弹出层
#### 对话框
#### 树型控件
#### 表单控件
#### 表格控件