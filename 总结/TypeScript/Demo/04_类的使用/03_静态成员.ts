// 只能通过类.属性/方法
class Person {
    static title: string = 'cgj'
    static getName(){
        return this.title
    }
}
const p = new Person
console.log(Person.title);



export { }