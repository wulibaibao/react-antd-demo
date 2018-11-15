#### 基于create-react-app 2.0构建前端框架 新手必会

开箱即用，容易理解，更适合小白使用开发学习

已支持：
- mobx ———— mobx进行状态管理
- React-router-dom ————  React路由体系
- Antd ———— 使用antd学习开发后台管理系统
- React-loadable ———— import()动态加载的支持
- webpack打包优化 ———— build包更小
- fetch ———— 数据请求 可另行安装axios
- Scss ———— css 预处理
- 登录验证
- 支持装载ES7（装饰器）
- Express 
- Webpack 4.0
- create-react-app 2.0
- 文件 gzip ———— compression

即将支持：
- IE兼容
- 接口
- nginx
- typescript

#### 快速开始

install    

`yarn install` or `npm install`

###### 建议使用yarn
`npm install yarn -g`

start    

`yarn start`

    默认端口：3000
###### 暂不支持命令更改端口

webpack proxy     

    转发可以直接配置package.json中的proxy

`yarn start --PORT 3000`

build

`yarn build`

#### 具体修改点：

##### webpack.config.dev.js && webpack.config.prod.js
+ 新增方法
```
 + function resolve (dir) {
 +     return path.join(__dirname, '..', dir)
 + }
```
+ resolve -> alias 新增
```
 + '@':resolve('src'),

```

##### webpack.config.prod

+ externals 
    externals 配置选项提供了「从输出的 bundle 中排除依赖」的方法。

```
 + externals: {
 +    'react': 'React',
 +    'react-dom': 'ReactDOM',
 +    'mobx' : 'mobx',
 +    'react-router-dom':'ReactRouterDOM',
 +    'mobx-react':'mobxReact',
 +    'moment':'moment',
 +    'antd' : 'antd',
 + },
```
+ devtool
    此选项控制是否生成，以及如何生成 source map。

```
 - devtool: shouldUseSourceMap ? 'source-map' : false,
 + devtool: false 
```

##### package.json -> proxy

    如果你有单独的后端开发服务器 API，并且希望在同域名下发送 API 请求 ，那么代理某些 URL 会很有用

```
 + "proxy":{}
```

##### public -> index.html

    HtmlWebpackPlugin 你可以让插件为你生成一个HTML文件，使用lodash模板提供你自己的模板，或使用你自己的loader。

```
 + <%if(process.env.NODE_ENV === 'production') {%>
 +    <script src="%PUBLIC_URL%/lib/react.production.min.js"></script>
 +    <script src="%PUBLIC_URL%/lib/react-dom.production.min.js"></script>
 +    <script src="%PUBLIC_URL%/lib/react-router-dom.min.js"></script>
 +    <script src="%PUBLIC_URL%/lib/mobx.umd.min.js"></script>
 +    <script src="%PUBLIC_URL%/lib/mobx-react.min.js"></script>
 +    <script src="%PUBLIC_URL%/lib/moment.min.js"></script>
 +    <script src="%PUBLIC_URL%/lib/antd.min.js"></script>
 + <%}%>
```

##### app.js

```
    const path = require('path')
    const express = require('express')

    var app = express()

    // 静态文件资源，做静态文件服务器，js、css、html资源等
    const projPath = process.cwd()
    // js,css资源
    app.use( `/` , express.static( path.join(projPath, 'build') ) )

    app.get( `*` , ( req , res ) => res.sendFile(path.join(__dirname, 'build', 'index.html')) )

    // 修改侦听服务器端口
    const port = 2001
    app.listen(port)
    console.info(`Listen on Port ${port}`)
```
## 希望喜欢
## over!

#### 喜欢请关注个人博客！

blog address : https://www.wulibaibao.com/

####简书地址：

https://www.jianshu.com/u/bc0ac5b86f32

联系我！
QQ ：381477703