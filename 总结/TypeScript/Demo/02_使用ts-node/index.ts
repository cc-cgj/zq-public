const num: number = 11
console.log(num)
export default {}

function printMessageLength(message?: string) {
    console.log(message!.length);
}
printMessageLength("whhh")

const message: null | string = null

const data = message ?? 'cgj'
console.log(data)

/**
 * @安装 npm i ts-node tslib @typs/node -D
 * @使用 npx ts-node index.ts
 * @注意 
 *      使用ts-node 运行文件时有默认内置了tsconfig.json配置文件
 **/