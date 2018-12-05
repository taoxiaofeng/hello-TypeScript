//字符串字面量
type EventNames = 'click' | 'scroll' | 'mousemove';
function handleEvent(ele: Element, event: EventNames) {
    // do something
}

handleEvent(document.getElementById('hello'), 'scroll'); //没问题
// handleEvent(document.getElementById('world'), 'dbclick'); //报错 类型“"dbclick"”的参数不能赋给类型“EventNames”的参数。
/**
 * 上例中，我们使用 type 定了一个字符串字面量类型 EventNames，它只能取三种字符串中的一种。
 * 注意，类型别名与字符串字面量类型都是使用 type 进行定义。
 */