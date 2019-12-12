
module.exports = {
  // 开发环境里定义了一组预定义的全局变量
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true,
  },
  // extends属性表示启用一系列核心规则，若有plugins属性表示同时启用插件的核心规则
  "extends": [
    "eslint:recommended",
    'plugin:react/recommended',
  ],
  // 全局变量
  "globals": {
  },
  // 设置解析器
  "parser": "babel-eslint",
  // 解析器选项
  "parserOptions": {
    // 表示一些附加特性的对象, 支持JSX
    "ecmaFeatures": {
      "jsx": true
    },
    // ECMAScript的版本
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  // 支持使用的第三方插件，在使用插件之前，你必须使用 npm 安装它。
  "plugins": [
    "react"
  ],

  /**
   * 规则配置
   * off 或 0：表示不验证规则
   * warn 或 1：表示验证规则，当不满足时，给警告
   * error 或 2 ：表示验证规则，不满足时报错
   */
  "rules": {
    "no-unused-vars": "off"
  }
};