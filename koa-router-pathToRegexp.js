const Koa = require('koa')
const app = new Koa()
const router = require('koa-router')()
// https://github.com/pillarjs/path-to-regexp
const pathToRegexp = require('path-to-regexp')

router
  .get('/', (ctx, next) => {
    ctx.body = "<h1>index page</h1>"
  })
  .get('/news', (ctx, next) => {
    ctx.body = "<h1>News List</h1>"
  })
  .get('/news/*', (ctx, next) => {
    let reg = pathToRegexp('/news/:year/:newsId')
    // console.log(reg)
    // /^\/news\/([^\/]+?)\/([^\/]+?)(?:\/)?$/i

    // 访问：http://localhost:3000/news/2018/123
    // console.log(reg.exec(ctx.path))
    // 生成一个数组，相当于将url进行了解构，用于获取相应的路由信息
    // [
    //     "/news/2018/123",
    //     "2018",
    //     "123"
    // ]

    // 获取新闻id
    ctx.body = `当前要获取的新闻id为：${reg.exec(ctx.path)[2]}`
  })
  .get('*', (ctx, next) => {
    ctx.body = "<h1>404</h1>"
  })

// 加载路由中间件
app.use(router.routes()).use(router.allowedMethods())

app.listen(3000, () => {
  console.log("Server started...");
})