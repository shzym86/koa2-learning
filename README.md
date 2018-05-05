## Koa2 学习代码

#### 示例代码用于实现Koa2最基础的一些功能：
 
 - Koa请求与响应
 - Koa路由
 - Koa静态服务器
 - Koa中间件的使用
 - Koa模板渲染
 - Koa实现POST请求
 - Koa实现上传图片
 - Koa实现cookie和session
 - Koa操作mysql数据库
 - Koa实现jsonp跨域请求
 
> package.json：

```
{
  "name": "koa-demo",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "nodemon index.js"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "ejs": "^2.5.8",
    "koa": "^2.5.0",
    "koa-body": "^2.5.0",
    "koa-bodyparser": "^4.2.0",
    "koa-convert": "^1.2.0",
    "koa-jsonp": "^2.0.2",
    "koa-router": "^7.4.0",
    "koa-session": "^5.8.1",
    "koa-static": "^4.0.2",
    "koa-views": "^6.1.4",
    "mysql": "^2.15.0",
    "path-to-regexp": "^2.2.1"
 },
  "devDependencies": {
    "nodemon": "^1.17.3"
  }
}

``` 
 
参考资料：

1. [Koa2中文文档](https://koa.bootcss.com/)
2. [Koa2进阶学习笔记](https://chenshenhai.github.io/koa2-note/)