function mySum(x: number, y: number): number {
    return x + y;
}

//函数表达式
let mySum2 = function (x: number, y: number): number {
    return x + y;
}

let mySum3: (x: number, y: number) => number = function (x: number, y: number): number {
    return x + y;
}

/**
 * 注意不要混淆了 TypeScript 中的 => 和 ES6 中的 =>。
 * 在 TypeScript 的类型定义中，=> 用来表示函数的定义，左边是输入类型，需要用括号括起来，右边是输出类型。
 */


//用接口定义函数的形状
interface SearchFunc {
    (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function (source: string, subString: string) {
    return source.search(subString) !== -1;
}

//可选参数
/**
 * 需要注意的是，可选参数必须接在必需参数后面。
 * 换句话说，可选参数后面不允许再出现必须参数了：
 * @param firstName 
 * @param lastName 
 */
// function buildName(firstName: string, lastName?: string) {
//     if (lastName) {
//         return firstName + ' ' + lastName;
//     } else {
//         return firstName;
//     }
// }

// let tomcat = buildName('Tom', 'Cat');
// let _tom = buildName('Tom');

/**
 * 默认参数
 * 允许给函数的参数添加默认值，
 */
// function buildName(lastName: string = 'cat', firstName: string) {
function buildName(firstName: string, lastName: string = 'cat') {
    return firstName + ' ' + lastName;
}

let tomcat = buildName('Tom', 'cat');
let _tom = buildName('Tom');

