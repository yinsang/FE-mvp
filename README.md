# mvp =>Minimum Viable Product

最小可行方案

针对很多新人前端不明白现在的开发工具及框架如何使用，对各个技术栈做一个说明。

如果对前端哪些技术栈不熟悉，可以issue我添加

## 说明

进入每个目录，如果有package.json则需要先在该目录下在终端（cmd）里`npm i`一下

webpack、eslint需要全局npm安装

`npm install -g eslint`

`npm install -g webpack-cli`

`npm install -g webpack`

## 目录(按照难度先后顺序)

1. react

    react js形式 非jsx

    react 可以不用npm包那一堆来写，react创建dom节点（虚拟），reactDOM去渲染成真实dom。

    reactDOM就是一个虚拟dom到真实dom的转换器

    react可以按照这种js的形式写，但是现代es6更推荐模块化，这时需要用es6的module（模块）
2. vue

    vue js 形式 非单文件

    比react 更好明白了。

    定义了全局Vue的类，然后new 了一个实例。对dom进行改造编译渲染了message进行数据绑定
3. typescript

    仅运行ts demo

    `npm install -g typescript`

    全局安装ts

    `tsc --init` 会生成tsconfig.json文件
    'tsc' 会把ts编译成index.js文件
4. babel

    仅展示babel运作模式
    `npm i`
    `npm install -g babel-cli`
    `npm run babel-build`
    打开index.html

    babel 命令需要安装在-g环境才能用babel的命令行

    babel是个编译器，能把你的js代码编译成其他版本js，至于编译成什么版本的js需要一个.babelrc来规定。

    所以需要安装babel-preset-env，再再.babelrc里写明用这个预先布置

    npm run babel-build是执行package.json里的scripts,为了生成可执行的index.dist.js
5. webpack-demo

    执行webpack的最小模式

    在命令行执行：webpack

    execute 【webpack】 in commander
6. webpack-babel

    webpack+babel

    演示babel-loader运行模式
    `npm i`

    `webpack`
    babel会吧es6的扩展...编译成es5，可以看dist文件查看

    you need to add .babelrc file for babel rules,
    and webpack.config.js for webpack rules.
    babel-loader is a way for webpack when using babel.
7. vue-webpack

    webpack + vue-loader + webpack-dev-server

    在webpack中用vue-loader编译vue单文件
    有webpack-dev-server帮助开发

    single-file-components  vue单文件组件

    `npm i`

    webpack 配置已完成打包工作

    `webpack`

    webpack-dev-server可以用npm run dev打开

    `npm run dev`

    为了引入方便 dev生成的/dist/main.js 和webpack build的main.js 放在一个文件夹。
    dev生成的main.js 其实在内存中，不在文件中显示

8. react-webpack-eslint

    webpack + babel-loader + webpack-dev-server + eslit
    包括eslint plugin的使用等

9. vue-webpack-eslint

    webpack + +babel-loader + vue-loader + webpack-dev-server + eslint
    包括eslint plugin的使用等

10. vue-webpack-eslint-typescript

    webpack + +babel-loader + vue-loader + webpack-dev-server + eslint + typescript

    vue的ts支持暂时用

    vue-property-decorator,因为ts对vue的this识别很困难，后期vue+ts兼容较好时可以废弃vue-property-decorator

11. react-webpack-eslint-typescript

    webpack + +babel-loader + webpack-dev-server + eslint + typescript
    事实证明react比vue对ts的支持好太多了啊，摔！

12. webpack-babel-unitTest

    babel 需要用2015，用env会导致babel版本错误。这是个bug吧。

    ps： mocha等单元测试的内容请上网自己搜，[阮一峰mocha](http://www.ruanyifeng.com/blog/2015/12/a-mocha-tutorial-of-examples.html)

    es6需要babel来编译，chai是断言库，mocha是测试框架

13. js-unitTest-karma-webpack
    es6的单元测试demo
    karma+mocha+webpack+chrome
    坑点：
    有时未报错，但是运行不成功，chrome里的debug按钮点击一下，进入debut.html 打开控制台，你就看到错误信息了！！！！！！
    * files囊括需要包含的文件 例如'unit/**/*.test.js'
    * preprocessors是预处理，需要用webpack进行配置
    * webpack 的打包和webpack官网一致
    还可以根据需求加入coverage等信息。

14. vue-unitTest-karma-webpack
    vue + webpack + karma + mocha + chai集大成者
    注意files 和preprocessors的配置
