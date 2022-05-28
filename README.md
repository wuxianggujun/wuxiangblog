# wuxiangblog
Node.js+Express+ejs+Layui封装的一个最基本博客，但是因为Express加载静态资源没有成功导致这个项目缺失了一部分代码。并没有完全照着哔哩哔哩上的项目

使用文档需要你的PhpStorm或者WebStorm配置好Node.js运行环境并且安装好Npm。

你可以先配置淘宝的镜像源，加快下载速度
npm install --registry=https://registry.npm.taobao.org
然后依次安装这些
npm install ejs@2.7.2
npm i layui  
npm i mysql
npm i express 
当这些都安装好了之后，
在你的浏览器打开
http://localhost:3000/
后面链接拼接使用Express的app.js中的路由路劲就可以看到。
