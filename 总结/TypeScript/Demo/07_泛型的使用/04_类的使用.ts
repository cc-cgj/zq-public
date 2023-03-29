
class Point<T>{
    x: T
    y: T
    z?: T
    constructor(x: T, y: T, z?: T) {
        this.x = x
        this.y = y
        this.z = z
    }
}

const p = new Point('1.1.1', '1.23', null)

const p1 = new Point<string>('1.1.1', '1.23')

const p2: Point<number> = {
    x: 1.1,
    y: 12.1
}

const arr: Array<string> = ['a', 'b', 'c']

export { }