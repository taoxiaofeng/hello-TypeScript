interface Person {
    readonly id: number; //只读属性
    name: string;
    age?: number;
    [propName: string]: any; //任意属性
}

let tom: Person = {
    id: 9527,
    name: 'Tom',
    age: 25,
    gender: 'male'
}

// tom.id = 9527; //报错 因为ID 是只读属性