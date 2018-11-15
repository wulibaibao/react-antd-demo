const path = require('path')
const express = require('express')
const compression = require('compression');

var app = express()

// 静态文件资源，做静态文件服务器，js、css、html资源等
const projPath = process.cwd()
// js,css资源
app.use(compression());
app.use( `/` , express.static( path.join(projPath, 'build') ) )

app.get( `*` , ( req , res ) => res.sendFile(path.join(__dirname, 'build', 'index.html')) )

// 修改侦听服务器端口
const port = 2001
app.listen(port)
console.info(`Listen on Port ${port}`)