// /**
//  * ES6 中类的用法
//  */
// //属性和方法
// /**
//  * 使用class定义类，使用constructor 定义构造函数
//  * 通过new 生成新实例的时候，会自动调用构造函数。
//  */

// class Animal {
//     constructor(name) {
//         this.name = name;
//     }
//     sayHi() {
//         return `My name is ${this.name}`;
//     }
// }

// let a = new Animal('Jack');
// console.log(a.sayHi()); // My name is Jack

// /**
//  * 类的继承
//  * 使用 extends 关键字实现继承，
//  * 子类中使用 super 关键字来调用父类的构造函数和方法。
//  */
// class Cat extends Animal {
//     constructor(name) {
//         super(name); // 调用父类的 constructor(name)
//         console.log(this.name);
//     }
//     sayHi() {
//         return 'Meow, ' + super.sayHi(); // 调用父类的 sayHi()
//     }
// }

// let c = new Cat('Tom'); // Tom
// console.log(c.sayHi()); // Meow, My name


/**
 * 存储器
 * 使用 getter 和 setter 可以改变属性的赋值和读取行为：
 */
// class Animal {
//     constructor(name) {
//         this.name = name;
//     }
//     get name() {
//         return 'Jack';
//     }
//     set name(value) {
//         console.log('setter: ' + value);
//     }
// }

// let a = new Animal('Kitty'); //setter: Kitty
// a.name = 'Tom'; // setter: Tom
// console.log(a.name); // Jack

/**
 * 静态方法
 * 使用 static 修饰符修饰的方法称为静态方法，它们不需要实例化，而是直接通过类来调用
 */
class Animal {
    static isAnimal(a) {
        return a instanceof Animal;
    }
}

let a = new Animal('Jack');
Animal.isAnimal(a); //true
console.log(a.isAnimal(a)); // a.isAnimal is not a function