//不使用类型函数
// function identity(arg: number) {
//     return arg;
// }
//使用any类型来定义函数
/**
 * 使用any类型会导致这个函数可以接收任何类型的arg参数，
 * 这样就丢失了一些信息：传入的类型与返回的类型应该是相同的。
 * 如果我们传入一个数字，我们只知道任何类型的值都有可能被返回。
 * @param arg
 */
// function identity(arg: any): any {
//     return arg;
// }
//泛型函数
/**
 * 给identity添加类型变量T，T帮助我们捕获用户传入的类型
 * @param arg
 */
function identity(arg) {
    console.log(arg.length);
    return arg;
}
/**
 * 泛型可以适用于多个类型，不同于使用any,它不会丢失信息。
 */
var output = identity(["myString"]); // type of output wull be 'string'
var output2 = identity(["myString"]); //type of output will be 'string'
