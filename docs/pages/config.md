### TODO，框架未完善，有些配置无用

想修改o-site的默认配置，如监听端口，建立`./[#]/config.js`文件，覆盖o-site默认配置。

配置有：

```
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
```

#### 配置详细说明

##### port

配置服务器启动监听端口。默认8000

##### delimiters

html模版的定界符，默认是[art-template](https://aui.github.io/art-template/zh-cn/docs/rules.html)的默认，修改请参考art-template