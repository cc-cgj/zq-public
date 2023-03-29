function currying(fn) {
  function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args)
    } else {
      function curried2(...args2) {
        return curried.apply(this, args.concat(args2))
      }
      return curried2
    }
  }
  return curried
}

function add(x, y, z) {
  x = x + 2
  y = y * 2
  z = z * 2
  return x + y + z
}

var curryingAdd = currying(add)

console.log(curryingAdd(10,20,30));
console.log(curryingAdd(10,20)(20));

function fn(a, b, c, d, e, f) {

}

console.log(fn.length);