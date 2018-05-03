const Koa = require('koa')
const path = require('path')
const views = require('koa-views')

const app = new Koa()

const viewsPath = './views'

app.use(views(path.join(__dirname, viewsPath), {
    extension: "ejs"
}))

// app.use(async (ctx) => {
//     let title = 'hello koa'
//     await ctx.render('index', {
//         title,
//     })
// })

app.use(async (ctx) => {
    let title = 'todo list'
    let content = 'You have no todo items.'
    await ctx.render('todo', {
        title,
        content
    })
})

app.listen(3000, () => {
    console.log('server start...')
})