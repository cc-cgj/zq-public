function add(x, y, z) {
  x = x + 2
  y = y * 2
  z = z * 2
  return x + y + z
}

console.log(add(1, 2, 3));

function sum(x, y, z) {
  x = x + 2
  return function () {
    y = y * 2
    return function () {
      z = z * 2
      return x + y + z
    }
  }
}
