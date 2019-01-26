// function mySum(x: number, y: number): number {
//     return x + y;
// }
//函数表达式
// let mySum2 = function (x: number, y: number): number {
//     return x + y;
// };
// let mySum3: (x: number, y: number) => number = function (x: number, y: number): number {
//     return x + y;
// };
// let myAdd: (baseValue:number, increment: number) => number = function(x:number, y:number):number {
//     return x + y;
// };
/**
 * 注意不要混淆了 TypeScript 中的 => 和 ES6 中的 =>。
 * 在 TypeScript 的类型定义中，=> 用来表示函数的定义，左边是输入类型，需要用括号括起来，右边是输出类型。
 */
//用接口定义函数的形状
// interface SearchFunc {
//     (source: string, subString: string): boolean;
// }
// let mySearch: SearchFunc;
// mySearch = function (source: string, subString: string) {
//     return source.search(subString) !== -1;
// }
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
// function buildName(firstName: string, lastName: string = 'cat') {
//     return firstName + ' ' + lastName;
// }
// let tomcat = buildName('Tom', 'cat');
// let _tom = buildName('Tom');
//剩余参数
// function push(array: any[], ...items: any[]) {
//     items.forEach(function (item) {
//         array.push(item);
//     });
// }
// let a = [];
// push(a, 1, 2, 3);
//重载
// function reverse(x: number | string): number | string {
//     if (typeof x === 'number') {
//         return Number(x.toString().split('').reverse().join(''));
//     } else if (typeof x === 'string') {
//         return x.split('').reverse().join('');
//     }
// }
// function reverse(x: number): number;
// function reverse(x: string): string;
// function reverse(x: number | string): number | string {
//     if (typeof x === 'number') {
//         return Number(x.toString().split('').reverse().join(''));
//     } else if (typeof x === 'string') {
//         return x.split('').reverse().join('');
//     }
// }
// 上例中，我们重复定义了多次函数 reverse，
// 前几次都是函数定义，最后一次是函数实现。
// 在编辑器的代码提示中，可以正确的看到前两个提示。
//带默认值的参数
// function buildName(firstName: string, lastName = "Smith") {
//     return firstName + " " + lastName;
// }
// let result1 = buildName("Bob");
// let result2 = buildName("Bob", undefined);
// // let result3 = buildName("Bob", "Adams", "Sr."); //应有 1-2 个参数，但获得 3 个
// let result4 = buildName("Bob", "Adams");
// console.log(result1,result2, result4);
//剩余参数
// function buildName(firstName: string, ...restOfName:string[]) {
//     return firstName + " " + restOfName.join(" ");
// }
// let employeeName = buildName("Joseph", "Samule", "Lucas", "Mackinzie");
// console.log(employeeName);
// let buildNameFun: (fname: string, ...rest: string[]) => string = buildName;
// let employeeName1 = buildNameFun("Joseph", "Samule", "Lucas", "Mackinzie");
// console.log(employeeName1);
// function f(this: void) {
// }
// interface Card {
//     suit: string;
//     card: number;
// }
// interface Deck {
//     suits: string[];
//     cards: number[];
//     createCardPicker(this: Deck): () => Card;
// }
// // 箭头函数能保存函数创建时的 this值，而不是调用时的值：
// let deck: Deck = {
//     suits: ["hearts", "spades", "clubs", "diamonds"],
//     cards: Array(52),
//     createCardPicker: function (this: Deck) {
//         // let that = this;  return的时候使用 => 函数 ，就省略掉了 再次给this赋值
//         return () => {
//             let pickedCard = Math.floor(Math.random() * 52);
//             let pickedSuit = Math.floor(pickedCard / 13);
//             return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
//         }
//     }
// }
// let cardPicker = deck.createCardPicker();
// let pickedCard = cardPicker();
// console.log("card: " + pickedCard.card + " of " + pickedCard.suit);
// //this 参数在回调函数里
// interface UIElement {
//     addClickListener(oncclick: (this: void, e: Event) => void): void;
// }
// class Handler {
//     info: string;
//     onClickBad = (e: Event) => { this.info = e.type }
// }
// let h = new Handler();
// let uiElement: UIElement;
// uiElement.addClickListener(h.onClickBad);
var suits = ["hearts", "spades", "clubs", "diamonds"];
function pickCard(x) {
    if (typeof x == "object") {
        var pickedCard = Math.floor(Math.random() * x.length);
        return pickedCard;
    }
    else if (typeof x == "number") {
        var pickedCard = Math.floor(x / 13);
        return { suit: suits[pickedCard], card: x % 13 };
    }
}
var myDeck = [{ suit: "diamonds", card: 2 }, { suit: "spads", card: 10 }, { suit: "hearts", card: 4 }];
var pickedCard1 = myDeck[pickCard(myDeck)];
console.log("card:" + pickedCard1.card + " of " + pickedCard1.suit);
var pickedCard2 = pickCard(15);
console.log("card: " + pickedCard2.card + " of " + pickedCard2.suit);
