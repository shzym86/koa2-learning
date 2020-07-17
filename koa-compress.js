const Koa = require('koa');
const app = new Koa();
const compress = require('koa-compress');

app.use(
  // https://github.com/koajs/compress
  compress({
    filter(content_type) {
      return /text/i.test(content_type);
    },
    threshold: 2048,
    gzip: {
      flush: require('zlib').constants.Z_SYNC_FLUSH,
    },
    deflate: {
      flush: require('zlib').constants.Z_SYNC_FLUSH,
    },
    br: false, // disable brotli
  })
);

app.use(async (ctx) => {
  ctx.compress = true;
  ctx.body = 'hello koa';
});

app.listen(3000);
console.log('Server started...');
