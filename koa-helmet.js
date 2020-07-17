const Koa = require('koa');
const app = new Koa();
const helmet = require('koa-helmet');

// https://github.com/venables/koa-helmet
app.use(helmet());
// 挂载中间件之后，响应头中多了以下字段：
// Strict-Transport-Security: max-age=15552000; includeSubDomains
// X-Content-Type-Options: nosniff
// X-DNS-Prefetch-Control: off
// X-Download-Options: noopen
// X-Frame-Options: SAMEORIGIN
// X-XSS-Protection: 1; mode=block

app.use(async (ctx) => {
  ctx.body = 'hello koa';
});

app.listen(3000);
console.log('Server started...');
