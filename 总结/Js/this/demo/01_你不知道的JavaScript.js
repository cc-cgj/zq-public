function foo(e) {
  console.log(e);
}

const bar = {
  id: 1
}

// 案例一
// [1, 2, 3].forEach(foo)

/**
 * @error :Uncaught TypeError: Cannot read properties of undefined (reading 'forEach')
 * js引擎进行词法分析将5行跟9行代码进行合并了：const bar = { id:1 }[1,2,3,4].forEach(foo)
 * 解决方案为：在定义变量末尾添加分号 ;
 * @suuceess
 *    const bar = { id:1 } ;
 *    [1, 2, 3].forEach(foo)
 */


// 案例二
(bar.foo = foo)()



