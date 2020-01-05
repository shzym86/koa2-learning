const Koa = require('koa')
const app = new Koa()
const jwt = require('jsonwebtoken')

const secret = 'i am a secret'

app.use(ctx => {
    if (ctx.path === '/login') {   // 模拟登录
        const payload = {
            uid: 12,
            name: 'zhangsan',
            role: 'admin'
        }
        const token = jwt.sign(payload, secret, { expiresIn: '60s' })
        ctx.body = { token }
    } else if (ctx.path === '/user') {    // 模拟获取用户信息
        const accessToken = ctx.query.token
        try {
            const user = jwt.verify(accessToken, secret)
            // 认证用户的信息可以挂载到ctx.state.user中便于其它地方使用
            ctx.state.user = user
            // {
            //     uid: 12,
            //     name: "zhangsan",
            //     role: "admin",
            //     iat: 1578204028,
            //     exp: 1578204328
            // }
            ctx.body = { user: ctx.state.user }
        } catch {
            ctx.throw(401)
        }
    }
})

app.listen(3000, () => {
    console.log("Server started...");
})