<!-- toRefs 和 toRef学习 -->

<!-- 这里通过 v-model进行了双向绑定，修改输入框的数值，
 实际上是修改了name_xin和name_ming的值，并将其同步到span标签中 -->

<!-- 尽可能让模板代码更简洁 -->

<template>
    <div class="person">
        <h1>情况四: 监视【reactive】定义的【对象】数据</h1>
        <p>姓名: {{ person.name }} </p><br>
        <p>年龄: {{ person.age }} </p><br>
        <p>汽车: {{person.car.c1}}、{{  person.car.c2 }} </p><br>
        <button @click="changeName">修改名字</button>
        <button @click="changeAge">修改年龄</button>
        <button @click="changeFirstCar">修改第一个汽车</button>
        <button @click="changeSecondCar">修改第二个汽车</button>
        <button @click="changeWholeCar">修改所有汽车</button>
        <!-- <button @click="changePerson">修改整个对象</button> -->
    </div>
</template>

<!-- 选项式 app -->
<script lang="ts">
export default {
    name: 'Person',  // 组件名
}
</script>

<script lang="ts" setup>
// watch 学习，主要是用于监视数据

import { reactive, watch } from 'vue'

let person = reactive({
    name: '张三',
    age: 18,
    car: {
        c1: '宝马',
        c2: '奔驰'
    }
})

function changeName() {
    person.name += '~'
}
function changeAge() {
    person.age += 1
}

function changeFirstCar() {
    person.car.c1 += '~'
}

function changeSecondCar() {
    person.car.c2 += '+'
}

function changeWholeCar() {
    person.car = {
        c1: '哈啰',
        c2: '青桔'
    }
}

// 只有修改名字才打印
// watch(() => person.name,
//     (newVal, oldVal) => {
//         console.log('person deep changed: ', oldVal, "=>", newVal)
//     }
// )

// 监视多个数据
watch([() =>person.name, () =>person.car],
    (newVal, oldVal) => {
        console.log('person deep changed: ', oldVal, "=>", newVal)
    },
    { deep: true }
)

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