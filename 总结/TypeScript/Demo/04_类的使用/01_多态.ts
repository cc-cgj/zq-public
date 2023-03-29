abstract class Person {
    // name: string
    // age: number
    abstract getKey(): any
}

class Teacher extends Person {
    constructor() {
        super()
    }
    getKey() {
        console.log("Teacher")
    }
}
class Student extends Person {
    constructor() {
        super()
    }
    getKey() {
        console.log("Student")
    }
}

function mapFns(ags: Person[]) {
    ags.forEach(p => {
        p.getKey()
    })
}
mapFns([new Teacher, new Student()])
