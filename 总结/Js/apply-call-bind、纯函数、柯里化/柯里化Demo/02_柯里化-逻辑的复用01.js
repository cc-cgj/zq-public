function makeAdder(count) {
  count = count * count
  return function (num) {
    return count + num
  }
} 

const adder5 = makeAdder(5)

adder5(10)
adder5(20)