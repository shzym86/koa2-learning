const Koa = require('koa')
const app = new Koa()

app.use(async (ctx) => {
    ctx.type = "html"
    ctx.body = ctx.url + "<br>" +
        ctx.path + "<br>" +
        ctx.host + "<br>" +
        ctx.hostname + "<br>" +
        ctx.ip + "<br>" +
        ctx.querystring
    // http://localhost:3000/user?name=user1&age=18
    // /user?name=user1&age=18
    // /user
    // localhost:3000
    // localhost
    // :: 1
    // name=user1&age=18
})

app.listen(3000, () => {
    console.log("Server started...");
})