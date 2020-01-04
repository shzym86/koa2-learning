const Koa = require('koa')
const app = new Koa()
const router = require('koa-router')()

// 通过pipe的方式来定义路由
router
  .get('/', (ctx, next) => {
    // ctx.type = "text"
    ctx.body = "<h1>index page</h1>"
  })
  .get('/user', (ctx, next) => {
    // ctx.type = "html"
    ctx.body = "<h1>hello koa</h1>"
  })
  .get('*', (ctx, next) => {
    ctx.body = "<h1>404</h1>"
  })

// 加载路由中间件
app.use(router.routes()).use(router.allowedMethods())
/**
 * 补充知识：allowedMethods 的作用
 * 1. 响应 http options 方法，告诉它所支持的方法，如返回 Allow: GET POST HEAD
 * 2. 可以返回 405 （Method Not Allowed）和 501 （Not Implemented）
 *  - 405：不允许以某种方式如DELETE访问接口，但是koa-router是有能力支持这个方法的
 *  - 501：没实现某种方法，koa-router本身就不支持这种请求如LINK
 */

app.listen(3000, () => {
  console.log("Server started...");
})