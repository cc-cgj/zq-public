function double(num) {
  return num * 2
}

function square(num) {
  return num ** 2
}


var count = 10

var result = square(double(count))

console.log(result);

function composeFn(m, n) {
  return function (count) {
    return m(n(count))
  }
}

var newFn = composeFn(square,double)

var result2 = newFn(count)

console.log(result2);