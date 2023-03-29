// 1、函数的父级作用域,//词法解析的时候就已经确定了

(function () {
  let message = "hello world"
  function foo() {
    console.log(message);//hello world
  }

  function bar() {
    let message = "hello bar"
    foo()
  }

  bar()
})();

// 2、函数的编译阶段

(function () {
  var bar = 100

  function foo() {
    console.log(bar) // undefined
    return
    var bar = 100
  }

  foo()
})();

// 3、函数的编译阶段

(function () {
  function foo() {
    var a = b = 100
  }

  foo()

  console.log(a);
  console.log(b);
})();





