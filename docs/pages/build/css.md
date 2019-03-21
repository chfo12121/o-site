#### 预处理css转换
```
│
├── app.html  // <link href="/css/home.css" rel="stylesheet"/>
│
├── css
│   │
│   ├── home.css#
│   │   │
│   │   ├── @index.css    // 默认这个名称为入口，可以配置为别的
│   │   │
│   │   ├── header.css
│   │   │
│   │   ├── body.scss    // 可以用scss
│   │   │
│   │   ├── footer.less    // less当然也不奇怪
```
#### css模块打包
很愉快地写`@index.css`
```
@import "./header.css";
@import "./body.scss";
@import "./footer.less";

...
```

http://localhost/css/home.css ，直接访问，无需什么构建操作，结果得到打包的css！