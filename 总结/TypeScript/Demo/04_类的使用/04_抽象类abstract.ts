function makeArea(shape: Shape) {
    return shape.getArea()
}

/**
 * @decription 抽象类只能被继承；子类必须实现抽象方法
 */
abstract class Shape {
    abstract getArea(): void
}

class Rectangle extends Shape {
    private width: number = 0
    private height: number = 0
    constructor(width: number, height: number) {
        super()
        this.width = width
        this.height = height
    }
    getArea() {
        return this.width * this.height
    }
}

class Circle extends Shape {
    private raduis: number = 0
    constructor(raduis: number) {
        super()
        this.raduis = raduis
    }
    getArea() {
        return 3.14 * this.raduis * this.raduis
    }
}

const recttangle = new Rectangle(100, 100)

const circle = new Circle(10)

console.log(makeArea(recttangle));
console.log(makeArea(circle));
