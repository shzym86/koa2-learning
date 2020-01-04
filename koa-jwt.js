const Koa = require('koa')
const app = new Koa()
const jwt = require('koa-jwt')
const KoaRouter = require('koa-router')
const router = new KoaRouter()

const jwtAuth = jwt({ secret: "i am jwt secret" })
const userCtl = (ctx) => {
    ctx.body = [{ name: "zhangsan" }, { name: "lisi" }]
}

// jwt认证接口，依次执行 jwtAuth 和 userCtl
// 如果未授权，jwtAuth 会返回 401 状态码，内容为 Authentication Error
router.get('/users', jwtAuth, userCtl)

// 如果在执行控制器方法之前还需要验证请求参数，则：
// const validator = ...
// router.get('/users', jwtAuth, validator, userCtl)

app.use(router.routes()).use(router.allowedMethods())

app.listen(3000, () => {
    console.log("Server started...");
})