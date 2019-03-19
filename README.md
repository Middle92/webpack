https://docs.npmjs.com/files/package.json npm-package文档

问题：
1. 初始化 npm install webpack -D会报错.
   package.json不能有webpack的字眼，修改name：webpack -> webpack-project

技术：
1. git的.gitignore文件 忽略文件提交到github上去