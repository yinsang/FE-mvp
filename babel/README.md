# 命令
npm i
npm install -g babel-cli
npm run babel-build
打开index.html
# 说明
babel 命令需要安装在-g环境才能用babel的命令行
babel是个编译器，能把你的js代码编译成其他版本js，至于编译成什么版本的js需要一个.babelrc来规定。
所以需要安装babel-preset-env，再再.babelrc里写明用这个预先布置
npm run babel-build是执行package.json里的scripts,为了生成可执行的index.dist.js