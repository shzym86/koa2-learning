const Koa = require("koa")
const querystring = require("querystring")
const app = new Koa()

app.use(async (ctx) => {

    if (ctx.url === '/' && ctx.method === 'GET') {
        // 当GET请求时候返回表单页面
        let html = `
      <h1>koa2 request post demo</h1>
      <form method="POST" action="/">
        <p>userName</p>
        <input name="userName" /><br/>
        <p>nickName</p>
        <input name="nickName" /><br/>
        <p>email</p>
        <input name="email" /><br/>
        <button type="submit">submit</button>
      </form>
    `
        ctx.body = html
    } else if (ctx.url === '/' && ctx.method === 'POST') {
        // console.log(ctx.request.body)
        // undefined
        // 当POST请求的时候，解析POST表单里的数据，并显示出来
        let postData = await parsePostData(ctx)
        ctx.body = postData
    } else {
        // 其他请求显示404
        ctx.body = '<h1>404！！！ o(╯□╰)o</h1>'
    }
})

// 解析上下文里node原生请求的POST参数
/**
 * 注意：
 * ctx.request是context经过封装的请求对象，
 * ctx.req是context提供的node.js原生HTTP请求对象，
 * 同理ctx.response是context经过封装的响应对象，
 * ctx.res是context提供的node.js原生HTTP请求对象。
 */
function parsePostData(ctx) {
    return new Promise((resolve, reject) => {
        try {
            let queryData = ""
            ctx.req.on("data", (chunk) => {
                queryData += chunk;
            })
            ctx.req.on("end", () => {
                let parseData = querystring.parse(queryData)
                resolve(parseData)
            })
        } catch (err) {
            reject(err)
        }
    })
}

app.listen(3000, () => {
    console.log("Server started...");
})