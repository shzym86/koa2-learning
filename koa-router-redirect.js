const Koa = require('koa')
const Router = require('koa-router')
const app = new Koa()

let router = new Router()

router
  .get('/', async (ctx) => {
    ctx.body = 'index page!'
  })
  .get('/helloworld', async (ctx) => {
    ctx.body = 'helloworld page!'
  })
  .get('/404', async (ctx) => {
    try {
      ctx.redirect('/')
    } catch (error) {
      console.log(error);
    }
  })

app.use(router.routes()).use(router.allowedMethods())

app.listen(3000, () => {
  console.log('Server started...')
})