const Koa = require('koa')
const app = new Koa()
const jwt = require('koa-jwt')
const router = require('koa-router')()
const jsonwebtoken = require('jsonwebtoken')
const secret = 'i am a secret'

// 这里的 jwtAuth 常量就是一个中间件，如果未授权会返回 401 状态码，内容为 Authentication Error
// 必须指定 HTTP Header 传递 Authorization: Bearer xxx 的键值对形式向服务器传递 token 并要求验证
const jwtAuth = jwt({ secret })

// 模拟用户登录并颁发token
const loginCtl = (ctx) => {
    const payload = { uid: 12, name: 'zhangsan', role: 'admin' }
    const token = jsonwebtoken.sign(payload, secret, { expiresIn: '300s' })
    ctx.body = { token }
}

// 模拟获取用户信息
const userCtl = (ctx) => {
    // 认证成功后，中间件会自动将解析出的 payload 挂载到 ctx.state.user 上
    ctx.body = { user: ctx.state.user }
}

router.get('/login', loginCtl)
router.get('/user', jwtAuth, userCtl)

app.use(router.routes()).use(router.allowedMethods())

app.listen(3000, () => {
    console.log("Server started...");
})