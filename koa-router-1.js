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

app.listen(3000, () => {
  console.log("Server started...");
})