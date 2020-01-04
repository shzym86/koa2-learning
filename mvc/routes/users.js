const Router = require('koa-router');
const router = new Router({ prefix: '/users' });
const { find, findById, create, update, delete: del } = require('../controllers/users');

// 定义增删改查路由，并将具体逻辑交给控制器处理
router.get('/', find);
router.get('/:id', findById);
router.post('/', create);
router.put('/:id', update);
router.delete('/:id', del);

module.exports = router;