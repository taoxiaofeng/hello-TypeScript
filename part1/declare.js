/**
 * 假如我们想使用第三方库，比如 jQuery，我们通常这样获取一个 id 是 foo 的元素
 * 但是在 TypeScript 中，我们并不知道 $ 或 jQuery 是什么东西：
 * 这时，我们需要使用 declare 关键字来定义它的类型，帮助 TypeScript 判断我们传入的参数类型对不对：
 */
jQuery('#foo');
//编译结果 =>  tsc declare.ts
jQuery('#foo');
//# sourceMappingURL=declare.js.map