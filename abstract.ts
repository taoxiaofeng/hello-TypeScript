/**
 * 抽象类
 */
//1、抽象类是不允许被实例化的
// abstract class Animal {
//     public name;
//     public constructor(name) {
//         this.name = name;
//     }

//     public abstract sayHi();
// }

// let a = new Animal('Jack'); //报错：无法创建抽象类的实例

//2、抽象类中的抽象方法必须被子类实现
// abstract class Animal {
//     public name;
//     public constructor(name) {
//         this.name = name;
//     }
//     public abstract sayHi();
// }

// class Cat extends Animal {
//     // public eat() {
//     //     console.log(`$(this.name) is eating`);
//     // }

//     public sayHi() {
//         console.log(`Meow, My name is ${this.name}`)
//     }
// }

// let cat = new Cat('Tom');

//类的类型
class Animal {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    sayHi(): string {
        return `My name is ${this.name}`;
    }
}

let a: Animal = new Animal('Jack');
console.log(a.sayHi());