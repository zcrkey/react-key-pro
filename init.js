const fs = require('fs');
const path = require('path');

let replaceFile = function (filePath, sourceRegx, targetStr) {
  fs.readFile(filePath, function (err, data) {
    if (err) {
      return err;
    }
    let str = data.toString();
    str = str.replace(sourceRegx, targetStr);
    fs.writeFile(filePath, str, function (err) {
      if (err) return err;
    });
  });
}

// 修改 react-scripts 包下 scripts 的start.js 、build.js 文件
let startPath = path.resolve(__dirname + '/node_modules/react-scripts/scripts/start.js');
let buildPath = path.resolve(__dirname + '/node_modules/react-scripts/scripts/build.js');

replaceFile(startPath, "require('../config/webpack.config')", "require('../../../webpack.config')");
replaceFile(buildPath, "require('../config/webpack.config')", "require('../../../webpack.config')");

console.log("init 执行成功");