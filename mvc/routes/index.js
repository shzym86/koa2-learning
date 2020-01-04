const fs = require('fs');

// 自定义中间件，导入路由集合并统一注册
module.exports = (app) => {
    fs.readdirSync(__dirname).forEach(file => {
        if (file === 'index.js') { return; }
        const router = require(`./${file}`);
        app.use(router.routes()).use(router.allowedMethods());
    });
}