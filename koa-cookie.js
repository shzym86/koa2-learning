const Koa = require('koa')
const app = new Koa()

app.keys = ['i am a boy']

app.use(async (ctx) => {

    if (ctx.url === '/index') {
        ctx.cookies.set(
            'cid',
            'hello world', {
                domain: 'localhost', // 写cookie所在的域名
                signed: true, // 设置cookie签名
                path: '/index', // 写cookie所在的路径
                maxAge: 10 * 60 * 1000, // cookie有效时长
                expires: new Date('2018-05-03'), // cookie失效时间
                httpOnly: false, // 是否只用于http请求中获取
                overwrite: false // 是否允许重写
            }
        )
        ctx.body = 'cookie is ok'
    } else {
        ctx.body = 'hello world'
    }

})

app.listen(3000, () => {
    console.log('Server started...')
})