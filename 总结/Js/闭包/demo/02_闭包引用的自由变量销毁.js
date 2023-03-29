function foo() {
  var name = "cgj"
  var age = 18
  function bar() {
    debugger
    console.log(age)
  }
  return bar
}

const fn = foo()

fn()


/**
 * 在V8引擎中name会被销毁
 * ECMA标准name不会被销毁
 */