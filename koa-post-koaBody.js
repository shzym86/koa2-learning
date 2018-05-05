const Koa = require("koa")
const router = require('koa-router')();
const app = new Koa()

// https://github.com/dlau/koa-body
const koaBody = require("koa-body")

app.use(koaBody())

router.get('/', (ctx) => {
  // 当GET请求时候返回表单页面
  let html = `
      <h1>koa2 request post demo</h1>
      <form method="POST" action="/">
        <p>userName</p>
        <input name="userName" /><br/>
        <p>email</p>
        <input name="email" /><br/>
        <button type="submit">submit</button>
      </form>
    `
  ctx.body = html
})

// 对于发送文本信息，与koa-bodyparser在使用方法上和效果上几乎一致
// koa-body的特点是可以处理上传文件
router.post('/', (ctx) => {
  // console.log(ctx.request.body);
  let postData = ctx.request.body
  ctx.body = JSON.stringify(postData);
});

app.use(router.routes())

app.listen(3000, () => {
  console.log("Server started...");
})