const Koa = require('koa');
const router = require('koa-router')()
const error = require('koa-json-error');
const app = new Koa();

// 测试 Koa 自带的异常处理
// app.use(async (ctx) => {
//     ctx.throw(401)  // Unauthorized
//     ctx.throw(404)  // Not Found
//     ctx.throw(422)  // Unprocessable Entity
//     ctx.throw(500)  // Internal Server Error
// })

// json异常处理中间件，返回json格式的错误信息 (放在所有路由的最前面)
app.use(error({
    /**
     * 如何营造生产环境？
     *  
     * 在 npm script 命令前加上 NODE_ENV=xxx 指定环境
     * "start": "NODE_ENV=production node index.js"
     * npm start
     *  
     * windows 系统需要使用 cross-env 来解决跨平台的问题：npm i cross-env -D
     * 部署到 Linux 环境下不需要这个包
     * "start": "cross-env NODE_ENV=production node index.js"
     */
    postFormat: (e, { stack, ...rest }) => process.env.NODE_ENV === 'production' ? rest : { stack, ...rest }
}));

router.get('/error', (ctx, next) => {
    const error = a.b
    // development
    // {
    //     stack: "ReferenceError: a is not defined at router.get (/Users/tony/Code/GitHub/koa2-learning/index.js:30:19) at dispatch (/Users/tony/Code/GitHub/koa2-learning/node_modules/koa-router/node_modules/koa-compose/index.js:44:32) at next (/Users/tony/Code/GitHub/koa2-learning/node_modules/koa-router/node_modules/koa-compose/index.js:45:18) at /Users/tony/Code/GitHub/koa2-learning/node_modules/koa-router/lib/router.js:346:16 at dispatch (/Users/tony/Code/GitHub/koa2-learning/node_modules/koa-router/node_modules/koa-compose/index.js:44:32) at /Users/tony/Code/GitHub/koa2-learning/node_modules/koa-router/node_modules/koa-compose/index.js:36:12 at dispatch (/Users/tony/Code/GitHub/koa2-learning/node_modules/koa-router/lib/router.js:351:31) at dispatch (/Users/tony/Code/GitHub/koa2-learning/node_modules/koa-compose/index.js:42:32) at next (/Users/tony/Code/GitHub/koa2-learning/node_modules/koa-compose/index.js:43:18) at jsonError (/Users/tony/Code/GitHub/koa2-learning/node_modules/koa-json-error/lib/middleware.js:49:12)",
    //     name: "ReferenceError",
    //     message: "a is not defined",
    //     status: 500
    // }
    // profuction
    // {
    //     name: "ReferenceError",
    //     message: "a is not defined",
    //     status: 500
    // }
})

app.use(router.routes()).use(router.allowedMethods())

app.listen(3000, () => {
    console.log("Server started...")
})
