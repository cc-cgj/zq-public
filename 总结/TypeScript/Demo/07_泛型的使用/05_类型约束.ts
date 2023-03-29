interface ILength {
    length: number
}


function foo<T extends ILength>(arg: T) {
    return arg.length
}

foo("cgj")
foo([])
foo({ length: 10 })