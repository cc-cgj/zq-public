// 联合类型
type CgjType = number | string
type Direction = 'left' | 'right'

// 另一种组合类型： 交叉类型
type CType = number & string

interface ISwm {
    swimming: () => void
}

interface IFly {
    flying: () => void
}

type CType1 = ISwm & IFly
type CType2 = ISwm | IFly

const obj1: CType1 = {
    swimming() {

    },
    flying() { }
}
const obj2: CType2 = {
    // flying() { }
    swimming() { }
}