const Koa = require('koa')
const jsonp = require('koa-jsonp')
const app = new Koa()

// 使用JSONP中间件
app.use(jsonp())

app.use(async (ctx) => {

    let returnData = {
        success: true,
        data: {
            text: 'hello world',
            time: new Date().getTime(),
        }
    }

    // 直接输出JSON
    ctx.body = returnData
})

app.listen(3000, () => {
    console.log('jsonp is starting...')
})