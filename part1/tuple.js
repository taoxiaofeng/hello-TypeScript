/**
 * 元祖
 * 数组合并了相同类型的对象，而元组（Tuple）合并了不同类型的对象。
 */
//定义 string 和 number 的元祖
var xcatliu = ['Xcat Liu', 25];
var _xcatliu;
_xcatliu[0] = 'Xcat Liu';
_xcatliu[1] = 25;
//越界的元祖
var xcatliu2;
xcatliu2 = ['xcat Liu', 25];
xcatliu2.push('http://xcatliu.com/');
// xcatliu2.push(true); //类型“true”的参数不能赋给类型“string | number”的参数。
//# sourceMappingURL=tuple.js.map