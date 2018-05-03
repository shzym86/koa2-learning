const Koa = require('koa')
const app = new Koa()

// 导入封装的数据库promise对象
const query = require('./db/db')

app.use(async (ctx) => {
    let sql = 'DELETE FROM book WHERE id = 1'
    let result = await query(sql)
    if (result.affectedRows == 1) {
        ctx.body = "删除成功！"
    } else {
        ctx.body = "删除失败！"
    }
})

app.listen(3000, () => {
    console.log('server start...')
})