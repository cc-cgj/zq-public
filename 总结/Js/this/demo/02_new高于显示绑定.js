function foo() {
  console.log(this);
}

var obj = {
  foo: foo.bind("aa")
}

const bar = new obj.foo()