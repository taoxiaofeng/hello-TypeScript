// enum Days { Sun, Mon, Tue, Web, Thu, Fri, Sat};


// console.log(Days['Sun'] === 0);
// console.log(Days['Mon'] === 1);
// console.log(Days['Tue'] === 2);
// console.log(Days['Sat'] === 6);

// console.log(Days[0] === 'Sun');
// console.log(Days[1] === 'Mon');
// console.log(Days[2] === 'Tue');
// console.log(Days[6] === 'Sat');

// enum Days { Sun = 7, Mon = 1, Tue, Wed, Thu, Fri, Sat };
// console.log(Days['Sun'] === 7);
// console.log(Days['Mon'] === 1);
// console.log(Days['Tue'] === 2);
// console.log(Days['Wed'] === 3);
// console.log(Days['Sat'] === 6);
// 上面的例子中，未手动赋值的枚举项会接着上一个枚举项递增。

// enum Days { Sun = 3, Mon = 1, Tue, Wed, Thu, Fri, Sat };

// console.log(Days['Sun'] === 3);
// console.log(Days['Wed'] === 3);
// console.log(Days[3] === 'Sun');
// console.log(Days[3] === 'Wed');

//上面的例子中，递增到 3 的时候与前面的 Sun 的取值重复了，但是 TypeScript 并没有报错，导致 Days[3] 的值先是 "Sun"，而后又被 "Wed" 覆盖了
//所以使用的时候需要注意，最好不要出现这种覆盖的情况。

// enum Days {Sun = 7, Mon = 1.5, Tue, Wed, Thu, Fri, Sat};

// console.log(Days['Sun'] === 7);
// console.log(Days['Mon'] === 1.5);
// console.log(Days['Tue'] === 2.5);
// console.log(Days['Sat'] === 6.5);
// 手动赋值的枚举项也可以为小数或负数，此时后续未手动赋值的项的递增步长仍为 1

/**
 * 手动赋值的枚举项可以不是数字，此时需要使用类型断言来让TSC无视类型检查
 */
// enum Days { Sun = 7, Mon, Tue, Wed, Thu, Fri, Sat = <any>"S" };


/**
 * 枚举项有两种类型：常数项（constant member）和计算所得项（computed member）
 */

//  enum Color {Red, Green, Blue = 'blue'.length};
//  console.log(Color['Blue']); //4
//  上面的例子中，"blue".length 就是一个计算所得项。

//常数枚举
/**
 * 常数枚举是使用 const enum 定义的枚举类型
 */
// const enum Directions {
//     Up,
//     Down,
//     Left,
//     Right
// }

// let directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right];
//常数枚举与普通枚举的区别是，它会在编译阶段被删除，并且不能包含计算成员。

//外部枚举
//外部枚举（Ambient Enums）是使用 declare enum 定义的枚举类型
declare const enum Directions {
    Up,
    Down,
    Left,
    Right
}

let directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right];
console.log(directions);