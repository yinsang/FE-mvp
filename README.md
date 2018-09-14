# mvp =>Minimum Viable Product

最小可行方案

针对很多新人前端不明白现在的开发工具及框架如何使用，对各个技术栈做一个说明。

## 说明

进入每个目录，如果有package.json则需要先在该目录下在终端（cmd）里`npm i`一下

webpack、eslint需要全局npm安装

`npm install -g eslint`

`npm install -g webpack-cli`

`npm install -g webpack`

## 目录(按照难度先后顺序)

1. react

    react js形式 非jsx
2. vue

    vue js 形式 非单文件
3. typescript

    仅运行ts demo
4. babel

    仅展示babel运作模式
5. webpack

    执行webpack的最小模式
6. webpack-babel

    webpack+babel

    演示babel-loader运行模式
7. vue-webpack

    webpack + vue-loader + webpack-dev-server

    在webpack中用vue-loader编译vue单文件
    有webpack-dev-server帮助开
8. react-webpack-eslint

    webpack + babel-loader + webpack-dev-server + eslit
    包括eslint plugin的使用等

9. vue-webpack-eslint

    webpack + +babel-loader + vue-loader + webpack-dev-server + eslint
    包括eslint plugin的使用等

10. vue-webpack-eslint-typescript

    webpack + +babel-loader + vue-loader + webpack-dev-server + eslint + typescript
    vue的ts支持暂时用vue-property-decorator,因为ts对vue的this识别很困难，后期vue+ts兼容较好时可以废弃vue-property-decorator

11. react-webpack-eslint-typescript

    webpack + +babel-loader + webpack-dev-server + eslint + typescript
    事实证明react比vue对ts的支持好太多了啊，摔！