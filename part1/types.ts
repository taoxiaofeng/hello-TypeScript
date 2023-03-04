// function sayHello(person: string) {
//     return 'Hello, ' + person;
// }

// let user = 'Tom';
// console.log(sayHello(user));

// let isDone: boolean = false;


// let createdByNewBoolean: boolean = new Boolean(1);

// void 类型 - 没有返回值，可以直接返回 undefined
function hello(): void {
  return undefined;
}

// never 类型  -- 永远都不会有返回值。
function fn(): never {
  throw new Error('报错了');
}

// 对象中包含其他属性，不具体定义类型
let obj: { name: string, [propsName: string]: any }
obj = { name: '小明', age: 18, job: '工程师' }

// 函数声明
let fn2: (a: number, b: number) => number;

let d = function (a, b): number {
  return a + b;
}

// string[] 表示字符串数组
let str = ['a', 'b', 'c'];

// number[] 表示数值数组
let numbers = [1, 2, 3];

/**
 *  tuple 元祖， 固定长度的数组
 */
let h: [string, string];
h = ['hello', 'world'];

/**
 * enum 枚举
 */

enum Gender {
  Male,
  Female
}

let i: {name: string; gender: number}
i = {
  name: '张三',
  gender: 1
}

console.log(i.gender)


