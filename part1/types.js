// function sayHello(person: string) {
//     return 'Hello, ' + person;
// }
// let user = 'Tom';
// console.log(sayHello(user));
// let isDone: boolean = false;
// let createdByNewBoolean: boolean = new Boolean(1);
// void 类型 - 没有返回值，可以直接返回 undefined
function hello() {
    return undefined;
}
// never 类型  -- 永远都不会有返回值。
function fn() {
    throw new Error('报错了');
}
// 对象中包含其他属性，不具体定义类型
var obj;
obj = { name: '小明', age: 18, job: '工程师' };
// 函数声明
var fn2;
var d = function (a, b) {
    return a + b;
};
// string[] 表示字符串数组
var str = ['a', 'b', 'c'];
// number[] 表示数值数组
var numbers = [1, 2, 3];
/**
 *  tuple 元祖， 固定长度的数组
 */
var h;
h = ['hello', 'world'];
/**
 * enum 枚举
 */
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
})(Gender || (Gender = {}));
var i;
i = {
    name: '张三',
    gender: 1
};
console.log(i.gender);
//# sourceMappingURL=types.js.map