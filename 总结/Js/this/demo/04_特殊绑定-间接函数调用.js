var obj1 = {
  name: "obj1",
  foo: function () {
    console.log(this)
  }
}

var obj2 = {
  name: "obj2"
}

obj2.foo = obj1.foo

obj2.foo()