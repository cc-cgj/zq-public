function foo<T, E, O, S>(arg1: T, arg2: E, ar3?: O, ...arg: S[]) {
    console.log(111, arg);
}

foo('1', '2', 3, 4, 5)
const divEl = document.createElement('div')
foo<string, HTMLDivElement, Object, any[]>('cgj', divEl, {}, [1], [2])
export {}