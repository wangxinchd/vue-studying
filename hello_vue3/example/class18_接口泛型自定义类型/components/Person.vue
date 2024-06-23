<template>

</template>

<!-- 选项式 app -->
<script lang="ts">
export default {
    name: 'Person',  // 组件名
}
</script>

<script lang="ts" setup>
import { type PersonInter, type Persons } from '@/types'  // @直接跳到src目录  这里在 PersonInter前需要加上 type

let person: PersonInter = {
    id: '123456',
    name: '张三',
    age: 25,
}

let personList: Persons = [
    {
        id: '123456',
        name: '张三',
        age: 25,
    },
    {
        id: '654321',
        name: '李四',
        age: 30,
    },
]

let personList2: Array<PersonInter> = [  // 通过Array使用数组泛型
    {
        id: '123456',
        name: '张三',
        age: 25,
    },
    {
        id: '654321',
        name: '李四',
        age: 30,
    },
]

let personList3: PersonInter[] = [  // 通过[]使用数组类型
    {
        id: '123456',
        name: '张三',
        age: 25,
    },
    {
        id: '654321',
        name: '李四',
        age: 30,
    },
]

</script>

<style scoped>
.person {
    background-color: #3cce17;
    border: 1px solid #ccc;
}

li {
    font-size: 20px;
}
</style>