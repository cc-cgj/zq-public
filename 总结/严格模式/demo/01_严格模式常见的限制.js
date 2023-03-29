"use strict"

// 1.禁止意外创建全局变量
// message = '1111'
// console.log(message);

// 2.不允许函数有相同的参数名称
// function foo(x, y, x) {
//   console.log(x, y, x);
// }

// 3.静默错误
// true.name = 1111
// NaN = 112
// var obj = {}
// Object.defineProperty(obj, "name", {
//   configurable: false,
//   writable: false,
//   value: "cc"
// })
// obj.name = 111

// 4.不允许使用原先的(es6之前)八进制格式
// var num = 0123
// var num = 0o123 // es6八进制写法
// var num2 = 0x123 // es6十六进制
// var num3 = 0b100 // es6二进制
// console.log(num, num2, num3);

// 5.with函数不允许使用

// 6.eval函数不允许向上引用变量
// var jsString = "'use strict';var message = 'cc'; console.log(message);"
// eval(jsString)
// console.log(message);

// 7.自执行函数(默认绑定)会指向undefined
function foo() {
  "use strict"
  console.log(this); // undefined
}

foo()

var obj = { name: "cc", foo: foo }

obj.foo()

// 黑盒子除外
// fn.apply(this = window)
setTimeout(function () {
  "use strict";
  console.log(this); // window
}, 1000)
