//使用类型断言 将 something 断言成 string 写法 (<string>something)
function getLength(something: string | number): number {
    if ((<string>something).length) {
        return (<string>something).length;
    } else {
        return something.toString().length;
    }
}
//类型断言的用法如上，在需要断言的变量前加上 <Type> 即可。
//类型断言不是类型转换，断言成一个联合类型中不存在的类型是不允许的：
// function toBoolean(something: string | number): boolean {
//     // return <boolean>something; //报错：类型“number”不可与类型“boolean”进行比较
// }