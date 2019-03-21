#### 'xxx#'文件夹

`xxx#`文件夹代表这是未构建源文件。

当用户访问访问某目录`xxx#`，那o-site将会分析尝试构建它。

#### @meta.json

`xxx#/@meta.json`告诉o-site如何构建：

```json
{
  "entry": "index.html",
  "type": "text/html"
}
```

如`/a/b/c.js#/@meta.json`当用户访问`http://localhost/a/b/c.js`会执行构建。

#### 默认

没有@meta.js，o-site会根据访问资源后缀判断是什么类型文件而做相应的构建

#### 三种源文件

#### 构建速度

`NODE_ENV=development`时编译的文件不会缓存，也就是每次访问都会构建，这样本地开发时可以修改文件产看新结果；生产环境在第一次构建后就会缓存，之后访问会很快。