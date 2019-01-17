/**
 * 类(Class)：定义了一件事物的抽象特点，包含它的属性和方法
 * 对象(Object): 类的实例，通过new生成
 * 面向对象(OOP)的三大特性：封装、继承、多态
 * 封装（Encapsulation）：将对数据的操作细节隐藏起来，只暴露对外的接口。外界调用端不需要（也不可能）知道细节，就能通过对外提供的接口来访问该对象，同时也保证了外界无法任意更改对象内部的数据
 * 继承（Inheritance）：子类继承父类，子类除了拥有父类的所有特性外，还有一些更具体的特性
 * 多态（Polymorphism）：由继承而产生了相关的不同的类，对同一个方法可以有不同的响应。比如 Cat 和 Dog 都继承自 Animal，但是分别实现了自己的 eat 方法。此时针对某一个实例，我们无需了解它是 Cat 还是 Dog，就可以直接调用 eat 方法，程序会自动判断出来应该如何执行 eat
 * 存取器（getter & setter）：用以改变属性的读取和赋值行为
 * 修饰符（Modifiers）：修饰符是一些关键字，用于限定成员或类型的性质。比如 public 表示公有属性或方法
 * 抽象类（Abstract Class）：抽象类是供其他类继承的基类，抽象类不允许被实例化。抽象类中的抽象方法必须在子类中被实现
 * 接口（Interfaces）：不同类之间公有的属性或方法，可以抽象成一个接口。接口可以被类实现（implements）。一个类只能继承自另一个类，但是可以实现多个接口
 */
/**
 * public private 和 protected
 * TypeScript 可以使用三种访问修饰符（Access Modifiers），分别是 public、private 和 protected。
 * public 修饰的属性或方法是公有的，可以在任何地方被访问到，默认所有的属性和方法都是 public 的
 * private 修饰的属性或方法是私有的，不能在声明它的类的外部访问
 * protected 修饰的属性或方法是受保护的，它和 private 类似，区别是它在子类中也是允许被访问的
 */
// class Animal {
//     // public name;
//     private name;
//     public constructor(name) {
//         this.name = name;
//     }
// }
// let a = new Animal('Jack');
// console.log(a.name); //name 定义更改为 private 后报错[ts] 属性“name”为私有属性，只能在类“Animal”中访问。 [2341]
// a.name = 'Tom';
// console.log(a.name); //name 定义更改为 private 后报错[ts] 属性“name”为私有属性，只能在类“Animal”中访问。 [2341]
// class Animal {
//     protected name;
//     public constructor(name) {
//         this.name = name;
//     }
// }
// class Cat extends Animal {
//     constructor(name) {
//         super(name);
//         console.log(this.name);
//     }
// }
//用 protected 修饰，则允许在子类中访问.
// class Greeter {
//     greeting: string;
//     constructor(message:string) {
//         this.greeting = message;
//     }
//     greet() {
//         console.log("Hello, " + this.greeting);
//         return "Hello, " + this.greeting;
//     }
// }
// let greeter = new Greeter('world');
// console.log(greeter);
// class Animal {
//     move(distanceInMeters: number = 0) {
//         console.log(`Animal moved ${distanceInMeters}`);
//     }
// }
// class Dog extends Animal {
//     brak() {
//         console.log('Woof! Woof!');
//     }
// }
// const dog = new Dog();
// dog.brak();
// dog.move(10);
// dog.brak();
// class Animal {
//     public name: string;
//     public constructor(theName: string) { this.name = theName; }
//     public move(distanceInMeters: number = 0) {
//         console.log(`${this.name} moved ${distanceInMeters}m.`);
//     }
// }
// class Snake extends Animal {
//     constructor(name: string) { super(name); }
//     move(distanceInMeters = 5) {
//         console.log("Slithering...");
//         super.move(distanceInMeters);
//     }
// }
// class Horse extends Animal {
//     constructor(name: string) { super(name); }
//     move(distanceInMeters = 45) {
//         console.log("Galloping...");
//         super.move(distanceInMeters);
//     }
// }
// let sam = new Snake("Sammy the Python");
// let tom: Animal = new Horse("Tommy the Palomino");
// sam.move();
// tom.move(34);
//类型兼容
// class Animal {
//     private name: string;
//     constructor(theName: string) { this.name = theName; }
// }
// class Rhino extends Animal {
//     constructor() { super("Rhino"); }
// }
// class Employee {
//     private name: string;
//     constructor(theName: string) { this.name = theName; }
// }
// let animal = new Animal("Goat");
// let rhino = new Rhino();
// let employee = new Employee("Bob");
// animal = rhino; Animal和 Rhino共享了来自 Animal里的私有成员定义 private name: 
// animal = employee; //报错 不能将类型“Employee”分配给类型“Animal”。类型具有私有属性“name”的单独声明
// protected
// class Person {
//     protected name: string;
//     constructor(name: string) { this.name = name; }
// }
// class Employee extends Person {
//     private department: string;
//     constructor(name: string, department: string) {
//         super(name);
//         this.department =department;
//     }
//     public getElevatorPitch() {
//         return  `Hello, my name is ${this.name} and I work in ${this.department}.`;
//     }
// }
// let howard = new Employee("Howard", "Sales");
// console.log(howard.getElevatorPitch());
// console.log(howard.name); //属性“name”受保护，只能在类“Person”及其子类中访问。
// class Person {
//     protected name: string;
//     protected constructor(theName: string) { this.name = theName; }
// }
//Employee 能够继承 Person 
// class Employee extends Person {
//     private department: string;
//     constructor(name: string, department: string) {
//         super(name);
//         this.department = department;
//     }
//     public getElevatorPitch() {
//         return `Hello, my name is ${this.name} and I work in ${this.department}.`;
//     }
// }
// let howard = new Employee("Howard", "Sales");
// let john = new Person("John"); //类“Person”的构造函数是受保护的，仅可在类声明中访问
// readonly修饰符  readonly关键字将属性设置为只读的
// class Octopus {
//     readonly name: string;
//     readonly numberOfLegs: number = 8;
//     constructor(theName: string) {
//         this.name = theName;
//     }
// }
// class Octopus {
//     readonly numberOflegs: number = 8;
//     constructor(readonly name: string) { }
// }
// let dad = new Octopus("Man with the 8 strong legs");
// console.log(dad)
// dad.name = "aaa";//Cannot assign to 'name' because it is a read-only property.
// 存取器 TypeScript支持通过getters/setters来截取对对象成员的访问
let passcode = "secret passcode";
class Employee {
    get fullName() {
        return this._fullName;
    }
    set fullName(newName) {
        if (passcode && passcode == "secret passcode") {
            this._fullName = newName;
        }
        else {
            console.log("Error: Unauthorized update of employee!");
        }
    }
}
let employee = new Employee();
employee.fullName = "Bob Smith";
if (employee.fullName) {
    console.log(employee.fullName);
}
