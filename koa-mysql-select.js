const Koa = require('koa')
const app = new Koa()

// 导入封装的数据库promise对象
const query = require('./db/db')

async function getData() {
    let sql = 'SELECT * FROM book'
    let dataList = await query(sql)
    return dataList
}

app.use(async (ctx) => {
    let data = await getData()
    let books = []
    // 通过索引行号遍历数据集合（数组）
    for (let index of data.keys()) {
        let book = {}
        book.id = data[index].id;
        book.title = data[index].title;
        book.price = data[index].price;
        books.push(book)
    }
    ctx.body = books

})

app.listen(3000, () => {
    console.log('server start...')
})