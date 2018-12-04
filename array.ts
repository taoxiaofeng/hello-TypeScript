// let fibonacci: number[] = [1, 2, 3, 4, 5]; //number 数组类型

// let fibonacci2: number[] = [1, 2, 3, 4, '5']; //报错  Type '(number | string)[]' is not assignable to type 'number[]'.

//数组泛型
// let fibonacci: Array<number> = [1, 2, 3, 4, 5];

//用接口表示数组
interface NumberArray {
    [index: number]: number;
}

/**
 * NumberArray 表示：只要 index 的类型是 number，
 * 那么值的类型必须是 number。
 */

let fibonacci: NumberArray = [1, 2, 3, 4, 5, 6];

//any 在数组中的应用

let list: any[] = ['Xcat Liu', 25, { website: 'http://xcatliu.com' }];

//类数组

function sum() {
    let args: IArguments = arguments;
}

