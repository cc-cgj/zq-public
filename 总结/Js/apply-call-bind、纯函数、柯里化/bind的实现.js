Function.prototype.ccBind = ccBind

function ccBind(thisArg, ...argArray) {

  var fn = this

  var thisArg = thisArg !== undefined && thisArg !== null ? Object(thisArg) : window

  function proxyFn(...args) {
    thisArg.fn = fn
    var finalArgs = [...argArray, ...args]
    var result = thisArg.fn(...finalArgs)
    delete thisArg.fn
    return result
  }
  return proxyFn
}

function foo() {
  console.log('foo被调用');
}


function sum(num1, num2, num3, num4) {
  console.log('sum被调用', num1, num2, num3, num4);
  return 520
}


var fooBind = foo.ccBind('foo')
// var result = fooBind()

var sumBind = sum.ccBind('foo', 10, 20)
var result = sumBind(30, 40)
console.log(result);