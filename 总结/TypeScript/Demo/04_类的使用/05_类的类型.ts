class Person {
    name: string = 'cgj'
    eating() {
        return this.name
    }
}

const p1 = new Person

const p2: Person = {
    name: '',
    eating() {
        return ''
    }
}

function printPerson(p: Person) {
    console.log(p.name)
}
printPerson(p1)
printPerson({
    name:'cgj',
    eating(){
        return 'hhh'
    }
})