// type
type Parent1 = {
    parent1: () => void
}
type Parent2 = {
    parent2: () => void
}

type Child = Parent1 & Parent2

const obj: Child = {
    parent1() { },
    parent2() { }
}

// interface

interface IParent1 {
    name1: string,
    parent1: () => void
}
interface IParent2 {
    name2: string,
    parent2: () => void
}

// type IChild = IParent1 & IParent2

interface IChild extends IParent1, IParent2 {

}

const IObj: IChild = {
    name1: '',
    name2: '',
    parent1() { },
    parent2() { }
}