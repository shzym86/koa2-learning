const Koa = require('koa');
const ratelimit = require('koa-ratelimit');
const app = new Koa();

app.use(
  ratelimit({
    // 这里使用内存驱动，一般使用redis驱动
    driver: 'memory',
    db: new Map(),
    duration: 60000,  // 单位: ms
    errorMessage: 'Sometimes You Just Have to Slow Down.',
    id: (ctx) => ctx.ip,
    headers: {
      remaining: 'Rate-Limit-Remaining',
      reset: 'Rate-Limit-Reset',
      total: 'Rate-Limit-Total',
    },
    max: 100, // 单位区间内最多几次
    disableHeader: false,
    whitelist: (ctx) => {
      // some logic that returns a boolean
    },
    blacklist: (ctx) => {
      // some logic that returns a boolean
    },
  })
);

// 响应头中多了以下字段：
// Rate-Limit-Remaining: 99
// Rate-Limit-Reset: 1594995284.865749
// Rate-Limit-Total: 100

// 限流后会新增以下字段，报429错误
// Retry-After: 40

app.use(async (ctx) => {
  ctx.body = 'Stuff!';
});

app.listen(3000);
console.log('listening on port 3000');
