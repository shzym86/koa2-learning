const Koa = require('koa')
const app = new Koa()
const router = require('koa-router')()
const parameter = require('koa-parameter')
const koaBody = require("koa-body")

// 由于需要验证请求体的参数格式，所以需要这个中间件来解析请求体
app.use(koaBody())

// 传入app参数，全局注册参数验证器
// 这样一来在路由中可以直接调用ctx上挂载的verifyParams方法来验证
// 验证不通过返回 422 错误
app.use(parameter(app));

router.post('/users', ctx => {
    // 校验参数
    // 更多验证规则：https://github.com/node-modules/parameter#readme
    ctx.verifyParams({
        id: {
            type: "number",
            required: true
        },
        name: {
            type: "string",
            required: false
        }
    })
    // 发送响应
    const { id, name } = ctx.request.body
    ctx.body = { id, name }
})

app.use(router.routes()).use(router.allowedMethods())

app.listen(3000, () => {
    console.log("Server started...");
})