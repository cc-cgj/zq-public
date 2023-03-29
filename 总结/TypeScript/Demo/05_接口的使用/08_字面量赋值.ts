
// 基本数据类型不可以
type numType = number
const str: string = 'hello world'
// const num: numType = str

interface IPerson {
    name: string,
    age: number,
    height: string | number
}

const person = {
    name: 'cgj',
    age: 18,
    height: 1.88,
    address: '广州市'
}
// freshness 擦除
const info: IPerson = person

const info1: IPerson = {
    name: 'cgj',
    age: 18,
    height: 1.88,
    // address: '广州市'// 报错
}

function printInfo(p: IPerson) {
    // console.log(p.address);

}
printInfo(info)
export { }