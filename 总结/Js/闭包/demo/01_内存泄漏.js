function defineArray() {

  const array = new Array(1024 * 1024).fill(1)
  // 1: 4byte  4 * 1024 = 4kb 4 * 1024 = 4mb

  return function () {
    console.log(array.length)
  }
}

var arrayFns = []
for (var i = 0; i < 100; i++) {
  arrayFns.push(defineArray())
}
setTimeout(function () {
  arrayFns = null
}, 2000)
