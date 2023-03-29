
// type IFn = (n1: number, n2: number) => number

interface IFn {
    (n1: number, n2: number): number
}

function printNumber(n1: number, n2: number, p: IFn) {
    console.log(p(n1, n2));
}
printNumber(10, 10, function (n1, n2) {
    return n1 * n2
})

export { }