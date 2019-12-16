module.exports = {
  // 插件
  "plugins": [],
  // 指定递归深度
  "recurseDepth": 10,
  // 指定输入配置
  "source": {
    "include": ["./src/utils", "./src/components"],
    "exclude": [],
    "includePattern": ".+\\.js(doc|x)?$",
    "excludePattern": "(^|\\/|\\\\)_"
  },
  // 指定来源类型
  "sourceType": "module",
  // 配置标签和标签词典
  "tags": {
    "allowUnknownTags": true,
    "dictionaries": ["jsdoc", "closure"]
  },
  // 配置模板
  "templates": {
    "cleverLinks": false,
    "monospaceLinks": false,
    // tui-jsdoc-template 配置信息
    "logo": {
      // "url": "http://nhnent.github.io/tui.component.tree/latest/styles/logo.png",
      "url": "",
      "width": "0px",
      "height": "0px",
      "link": "https://github.com/zcrkey/react-key"
    },
    "name": "react-key",
    "footerText": "React Key JSDoc"
  },
  // 指定输出配置
  "opts": {
    "template": "node_modules/tui-jsdoc-template", // 文档所使用的模板
    "encoding": "utf8",
    "destination": "./jsdoc/",
  }
}