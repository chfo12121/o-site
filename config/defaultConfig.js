/**
 * o-site内建默认配置
 */
module.exports = {
    port: 8000,    // 端口
    outputCache: '',    // 是否使用缓存
    httpCache: {    // 是否使用http策略
        maxAge: '',    // 缓存时间
    },
    shieldFiles: '',    // 屏蔽文件
    accessSource: '',    // 是否可以访问src文件
    entryName: {    // 入口文件名
        html: '',
        css: '',
        js: '',
        image: '',
    },
    logFormat: '',    // 日志格式
    logFile: {    // 是否吧日志记录到文件
        path: '',    // 记录文件路径
    },
    directoryIndex: true,    // 是否开启index.html代表目录
}