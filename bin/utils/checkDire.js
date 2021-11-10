const fs = require('fs');
const chalk = require('chalk');
module.exports = function (dir, name) {
  console.log(dir, name)
  let isExists = fs.existsSync(dir);
  if (isExists) {
    console.log(chalk.red(
      `${name} 已经存在!`
    ));
    process.exit(1); //存在则跳出
  }
};