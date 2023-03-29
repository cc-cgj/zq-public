const obj = {
  _name: "cgj",
  get name() {
    return this._name
  },
  set name(value) {
    this._name = value
  },
  user: {
    name: 'czq'
  }
}

const objProxy = new Proxy(obj, {
  get(target, key, receiver) {
    // console.log("get方法被访问--------", key);
    return Reflect.get(target, key, receiver)
  },
  set(target, key, newValue) {
    console.log(1111, target, key, newValue)
    Reflect.set(target, key, newValue)
  }
})

objProxy.user.name = 'cfj'

// console.log(objProxy.name);


/**
 * 1、objProxy.name的get方法this指向的是obj
 * 2、所以需要通过receiver(Proxy 或者继承 Proxy 的对象)修改this
 * 3、Reflect.get的第三个参数修改this
 */