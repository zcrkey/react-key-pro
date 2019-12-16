module.exports = {
  // 根文件目录
  "root": true,
  // 开发环境
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true,
    "jest": true,
    "node": true
  },
  // 全局变量
  "globals": {
  },
  // 解析器
  "parser": "babel-eslint",
  // 解析器配置
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  // extends属性表示启用一系列核心规则，若有plugins属性表示同时启用插件的核心规则
  "extends": [
    "eslint:recommended",
    'plugin:react/recommended',
  ],
  // 支持使用的第三方插件，在使用插件之前，你必须使用 npm 安装它。
  "plugins": [
    "import",
    "flowtype",
    "jsx-a11y",
    "react",
    "react-hooks"
  ],
  /**
   * 规则配置
   * off 或 0：表示不验证规则
   * warn 或 1：表示验证规则，当不满足时，给警告
   * error 或 2 ：表示验证规则，不满足时报错
   */
  "rules": {
    // 未使用变量
    "no-unused-vars": "off",
    // 禁止不必要的布尔强制转换
    "no-extra-boolean-cast": "off",
    // debugger
    "no-debugger": "off",
    "react/prop-types": "warn",
    "react/jsx-no-target-blank": "warn"
  }
}