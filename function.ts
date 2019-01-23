function mySum(x: number, y: number): number {
    return x + y;
}

//函数表达式
let mySum2 = function (x: number, y: number): number {
    return x + y;
};

let mySum3: (x: number, y: number) => number = function (x: number, y: number): number {
    return x + y;
};

let myAdd: (baseValue:number, increment: number) => number = function(x:number, y:number):number {
    return x + y;
};

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

//剩余参数
function push(array: any[], ...items: any[]) {
    items.forEach(function (item) {
        array.push(item);
    });
}

let a = [];
push(a, 1, 2, 3);

//重载
// function reverse(x: number | string): number | string {
//     if (typeof x === 'number') {
//         return Number(x.toString().split('').reverse().join(''));
//     } else if (typeof x === 'string') {
//         return x.split('').reverse().join('');
//     }
// }

function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}
// 上例中，我们重复定义了多次函数 reverse，
// 前几次都是函数定义，最后一次是函数实现。
// 在编辑器的代码提示中，可以正确的看到前两个提示。