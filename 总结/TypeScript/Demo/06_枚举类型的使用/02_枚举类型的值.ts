enum Direction {
    LEFT = "LEFT",
    RIGHT = "RIGHT",
    TOP = "TOP",
    BOTTOM = "BOTTOM"
}

function turnDirection(direction: Direction) {
    console.log(direction);
    switch (direction) {
        case Direction.LEFT:
            console.log('角色向左移动了');
            break
        case Direction.RIGHT:
            console.log('角色向右移动了');
            break
        case Direction.TOP:
            console.log('角色向上移动了');
            break
        case Direction.BOTTOM:
            console.log('角色向下移动了');
            break
    }
}
turnDirection(Direction.LEFT)
turnDirection(Direction.RIGHT)
turnDirection(Direction.TOP)
turnDirection(Direction.BOTTOM)
export { }