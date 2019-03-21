其实这个功能是个鸡肋，不过有的人可能想要。裁剪压缩图片现在很多cdn都可以了，`http://a/bg.jpg?q=5`
#### 生产压缩图片
```
│
├── images
│   │
│   ├── bg.jpg#  // <img src="/images/bg.jpg"/>，文件夹.jpg没意义
│   │   │
│   │   ├── @meta.json  // 默认这个名字，可以配置
│   │   │
│   │   ├── xx.jpg
```
@meta.json说明：
```
{
    "entry": "xx.jpg",
    "压缩质量(这属性名还没定好)": 0.5,
    "长"：11，
    "宽"：11，
    "mode"："fill"，
    "type"："jpeg"
}
```

http://localhost/images/bg.jpg ，直接访问，不用build，自动就得到了处理后的图片。