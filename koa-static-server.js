const Koa = require('koa')
const path = require('path')
const static = require('koa-static')
const convert = require("koa-convert")

const app = new Koa()

const staticPath = './static'

// 由于koa-static目前不支持koa2
// 所以只能用koa-convert封装一下
app.use(convert(
    static(path.join(__dirname, staticPath))
))

app.listen(3000, () => {
    console.log('server start...')
})