interface IPerson<T1, T2 > {
    name: T1,
    age: T2
}
const p1: IPerson<string,number> = {
    name: 'cgj',
    age: 18
}

// 接口没有类型推导

interface IPerson<T1 = string, T2 = number> {
    name: T1,
    age: T2
}
const p2: IPerson = {
    name: 'cgj',
    age: 18
}
export {}