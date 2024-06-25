// 定义一个接口，用于限制person对象的具体属性

// 分别暴露
export interface PersonInter {
    id: string
    name: string;
    age: number;
}

export type Persons = Array<PersonInter>  // 定义一个数组类型，元素为PersonInter