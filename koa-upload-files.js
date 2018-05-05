const path = require("path")
const fs = require("fs")
const Koa = require("koa")
const router = require('koa-router')();
const koaBody = require("koa-body")
const app = new Koa()

app.use(koaBody({
  multipart: true,
  formidable: {
    // 指定文件上传的临时目录
    uploadDir: path.join(__dirname, "./temp")
  }
}))

router.get('/', (ctx) => {
  let html = `
      <h1>koa2 upload demo</h1>
      <form method="POST" action="/" enctype="multipart/form-data">
        <!-- <p>Name:</p>
        <input type="text" name="name" /><br/> -->
        <p>upload picture:</p>
        <input type="file" name="picture" /><br/>
        <p><button type="submit">submit</button></p>
      </form>
    `
  ctx.body = html
})

router.post('/', (ctx) => {
  // fields获取除file外的表单控件信息 [Object]
  // console.log(ctx.request.body.fields);
  // files只获取上传文件的信息 [Object]
  // console.log(ctx.request.body.files);
  let pictureData = ctx.request.body.files.picture
  ctx.body = `
        <p>上传的图片信息：</p>
        <p>文件大小：${pictureData.size}</p>
        <p>文件名：${pictureData.name}</p>
        <p>文件类型：${pictureData.type}</p>
    `

  // 上传文件，读取临时目录的文件流到指定上传的目录
  let rs = fs.createReadStream(pictureData.path);
  let ws = fs.createWriteStream("./uploads/output.jpg");
  rs.pipe(ws);
});

app.use(router.routes())

app.listen(3000, () => {
  console.log("Server started...");
})