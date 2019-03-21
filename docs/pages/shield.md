#### 默认屏蔽

在我们的项目中，有些文件是我们开发要用的文件，不应该允许用户访问的，o-site可以很好的屏蔽它们。

在服务器上，设置了环境变量`NODE_RUN_SPACE=remote-server`，这个设置会让o-site运行是开启文件屏蔽功能。

如果没指定，默认会屏蔽这些东西：

`.git`,

`.gitignore`

`node_modules`

`package.json`

`package-lock.json`

`README.md`

`Dockerfile`

`./[#]/`

`./[http]/`

`*#/`  // #结尾的文件夹

#### 自定义屏蔽

要指定其它要屏蔽的文件，在`[#]`文件夹下创建`files-shield.json`或`files-shield.js`或`files-shield.node`，导出需要要屏蔽的文件的数组。