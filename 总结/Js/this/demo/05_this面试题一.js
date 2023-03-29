var name = "window"

var person = {
  name: "person",
  sayName: function () {
    console.log(this.name);
  }
}

function sayName(){
  
  var sss = person.sayName
  
  // 独立函数调用
  sss()//window
  
  // 隐式调用
  person.sayName();//person

  // 隐式调用
  (person.sayName)();//person

  // 赋值表达式(独立函数调用)
  (b = person.sayName) () //window
}

sayName()