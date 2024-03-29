// 函数参数类型的参数化

// 在定义这个函数时，我不决定这些参数的类型
// 而是让调用者以参数的形式告知，我这里的函数参数应该是什么类型
function sum<T>(num1: T): T {
    return num1
}

// 调用方式一：明确的传入类型
sum<number>(50)
sum<[string]>(['aa'])
sum<number[]>([123])
sum<Array<number>>([123, 123])

// 调用方式一：函数-类型推导
sum('cgj')
