function CzCompose(...fns) {
  var length = fns.length
  for (var i = 0; i < length; i++) {
    if (typeof fns[i] !== 'function') {
      throw new TypeError('请传入函数')
    }
  }
  function compose(...args) {
    var index = 0
    var result = length > 0 ? fns[index].apply(this, args) : args
    while (++index < length) {
      result = fns[index].call(this, result)
    }
    return result
  }
  return compose
}

function double(num) {
  return num * 2
}

function square(num) {
  return num ** 2
}

var newFn = CzCompose(double, square, 1)

var result = newFn(10)

console.log(result);