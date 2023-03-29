function foo() {
  console.log(this);
}


foo.apply(null)

foo.call(undefined)

var bar = foo.bind(null)

bar()