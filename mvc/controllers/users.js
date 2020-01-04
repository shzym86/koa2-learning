/**
 * 编写控制器的最佳实践：
 * 1. 每个资源的控制器放在不同的文件
 * 2. 尽量使用[类]+[类方法]的形式编写控制器
 * 3. 包含严谨的错误处理
 *   
 * 控制器中调用模型(Model)去执行数据库的增删改查，这里省略
 */
class UsersController {
    async find(ctx) {
        ctx.body = [{ name: "zhangsan" }, { name: "lisi" }]
    }
    async findById(ctx) {
        const id = ctx.params.id
        ctx.body = { id, name: "zhangsan" }
    }
    async create(ctx) {
        ctx.body = { name: "zhangsan" }
    }
    async update(ctx) {
        ctx.body = { name: "wangwu" }
    }
    async delete(ctx) {
        ctx.status = 204;
    }
}

module.exports = new UsersController();