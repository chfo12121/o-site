/**
 * o-site，暂时叫这个名称，o是想表示框架的一个思想是，让前端开发像以前网站开发那样原始简单
 */

// 导出一个promise，有其它程序要做回调的话，就能使用了
module.exports = (async () => {
    const fs = require('fs')
    const Koa = require('koa')
    const glob = require('glob')
    const app = new Koa()
    let config = require('./config') // 得到应用的配置，包括使用者自定义的配置
    // 全局变量，所有模块都能访问到对缓存，key=>value对形式
    global.cachedPathContent = {}

    // context
    app.context.cacheResponse = require('./context/cacheResponse')

    // middleware
    app
        .use(require('./middleware/log'))   // 收到请求，开始记录
        .use(require('./middleware/404'))   // 哪怕有文件都有可能404
        .use(require('./middleware/useCache'))  // 检查存储结果，主要为了不用去后面再构建
        .use(require('./middleware/shield'))    // 屏蔽屏蔽特殊文件的访问
        .use(require('./middleware/srcBuild'))  // 需要构建对资源
        .use(require('koa-static')(process.cwd()))  // 最后，普通资源（静态文件）直接访问

    await new Promise((resolve) => {
        app
            .listen(config.port, function () {
                console.log(`o-site: Launch success. Listening ${config.port}.`)
                resolve()
            })
            .on('error', (err, ctx) => {
                console.log(err)
                // 捕捉任何错误，输出500页面
                // todo
            })
    })
})()