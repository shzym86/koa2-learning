const Koa = require('koa')
const app = new Koa()
const session = require('koa-generic-session')
const Redis = require('koa-redis')

// ---------------------------------------------
// 启动redis服务：redis-server
// 查看redis数据：redis-cli   ->   keys *
// ---------------------------------------------

// 指定一个keys，给session作加密处理
app.keys = ['key', 'keys']

// 使用session中间件，并且使用redis作session的存储介质
// 如不指定默认使用内存存储session
app.use(session({
    store: new Redis(), // 默认指向127.0.0.1:6379
    key: 'mt', // 存储在浏览器cookie的前缀
    prefix: 'mtpr' // redis中的session键的前缀
}))

app.use(async (ctx) => {
    // 记录session
    ctx.session.count++

    // 读取session输出到页面上
    ctx.body = ctx.session
})

app.listen(3000)