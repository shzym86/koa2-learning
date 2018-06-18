// Koa2的中间件功能用到了compose模块

// 异步原理

async function fn1(next) {
  console.log('fn1')
  await next()
  console.log('end fn1')
}

async function fn2(next) {
  console.log('fn2')
  await delay()
  await next()
  console.log('end fn2')
}

function fn3(next) {
  console.log('fn3')
}

function delay() {
  return new Promise((reslove, reject) => {
    setTimeout(() => {
      reslove()
    }, 2000)
  })
}

function compose(middlewares) {
  return function () {
    return dispatch(0)
    // 递归函数，实现Koa2的洋葱圈模型
    function dispatch(i) {
      let fn = middlewares[i]
      if (!fn) {
        return Promise.resolve()
      }
      return Promise.resolve(fn(function next() {
        return dispatch(i + 1)
      }))
    }
  }
}

const middlewares = [fn1, fn2, fn3]
const finalFn = compose(middlewares)
finalFn()
// fn1
// fn2
// fn3
// end fn2
// end fn1




// 同步原理：

function fn1(x, y) {
  return x + y
}

function fn2(z) {
  return z * z
}

function compose(midds) {
  return (...args) => {
    // 第一个函数的参数是外部传进来的
    let res = midds[0](...args)
    let len = midds.length
    for (let i = 1; i < len; i++) {
      // 每个函数的返回值作为下一个函数的参数
      res = midds[i](res)
    }
    return res
  }
}

let middlewares = [fn1, fn2]
// 定义一个执行函数实现需求
let fn = compose(middlewares)
// 传入第一个函数的参数
let res = fn(2, 6)
console.log(res); // 64