有时我们想html可以根据情况变化

app.html

development时
```
...
<script src="/js/app.js"></script>
<script src="/js/test.js"></script>
<script src="/js/vconsole.js"></script>
...
```
production时
```
...
<script src="/js/app.js"></script>
...
```
支持模版就好了～
```
...
<% if (dev) { %>

    <script src="/js/app.js"></script>
    <script src="/js/test.js"></script>
    <script src="/js/vconsole.js"></script>

<% } else { %>

    <script src="/js/app.js"></script>

<% } %>
...

```

o-site支持！
```
│
├── deom
│   │
│   ├── app.html#    // 文件夹，.html没有任何意义，只是让访问地址像html文件，http://localhost/demo/app.html
│   │   │
│   │   ├── @index.html    // 默认这个名称的文件是入口，可以配置为别的
│   │   │
│   │   ├── @templateData.js  // 默认模版数据文件名
```
写模板变量@templateData.js：
```
module.exports = {
    dev: process.env.NODE_ENV == 'development',
}
```

不同NODE_ENV下启动，访问http://localhost/demo/app.html ，会发现html对应环境！

?> 该功能实现使用[art-template](https://aui.github.io/art-template/)模版引擎。