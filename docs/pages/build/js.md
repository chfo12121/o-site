#### js模块自动webpack打包
```
│
├── app.html  // <script src="/js/app.js"></script>
│
├── logo.png  // import logo？不建议。<img src="logo.png"/>不就好了？
│
├── style.css  // import 'style.css'？不建议。<link href="style.css" rel="stylesheet"/>就可以了
│
├── js
│   │
│   ├── app.js#
│   │   │
│   │   ├── @index.js    // 默认这个名称的文件是入口
│   │   │
│   │   ├── func1.js
│   │   │
│   │   ├── App.vue    // 就像常规写webpack支持的模块哪样，
│   │   │
│   │   ├── func2.ts    // 自己项目安装loader
```
`@index.js`这样写
```
// @index.js
import Vue from 'vue'
import func1 from "./func1.js";
import App from "./App.vue";
import func2 from "./func1.ts";

...
```

http://localhost/js/app.js ，直接访问，无需什么构建操作，结果得到打包的js文件！

import图片怎么办？其实图片或css之类最好放到别的地方直接访问，这样更简单。

如果你真的要这样import，o-site会把图片变成base64，css变成嵌入js的代码，不会产生成独立的文件。