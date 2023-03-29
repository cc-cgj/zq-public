class Person {
    private _name: string = ''
    set name(newNmae: string) {
        this._name = newNmae
    }
    get name() {
        return this._name
    }
    constructor(name: string) {
        this.name = name
    }
}

const p = new Person('')
p.name = 'cgj'
console.log(p);


export { }