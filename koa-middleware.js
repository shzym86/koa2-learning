const Koa = require("koa")
const logger = require("./middleware/logger-async")
const app = new Koa()

app.use(logger())

app.use(async (ctx) => {
    ctx.body = "Hello Koa 2";
})

app.listen(3000)
console.log("Server started...");