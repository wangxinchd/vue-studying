<!-- toRefs 和 toRef学习 -->

<!-- 这里通过 v-model进行了双向绑定，修改输入框的数值，
 实际上是修改了name_xin和name_ming的值，并将其同步到span标签中 -->

<!-- 尽可能让模板代码更简洁 -->

<template>
    <div class="person">
        <h1>情况二: 监视【ref】定义的【对象】数据</h1>
        <p>姓名: {{ person.name }} </p><br>
        <p>年龄: {{ person.age }} </p><br>
        <button @click="changeName">修改名字</button>
        <button @click="changeAge">修改年龄</button>
        <button @click="changePerson">修改整个对象</button>
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

import { ref, watch } from 'vue'

let person = ref({
    name: '张三',
    age: 18,
})

function changeName() {
    person.value.name += '~'
}
function changeAge() {
    person.value.age += 1
}

function changePerson() {  // 只有执行这个命令，监视器才改变，也就是说监视器监视的是对象地址，而不是对象里面的值
    person.value = { name: '李四', age: 20 }
}
// 监视sum的变化
// const stopWatch = watch(person, (newVal, oldVal) => {
//     console.log('person changed: ', oldVal, "=>", newVal)
// })

// 开启深度监视，会监视对象内部的属性变化
// 参数1：要监视的对象
// 参数2：回调函数，接收两个参数，第一个参数是新值，第二个参数是旧值【这两个值有时会相同，有时会不同】
// 参数3：选项对象，deep: true 表示开启深度监视

watch(person,
    (newVal, oldVal) => {
        console.log('person deep changed: ', oldVal, "=>", newVal)
    },
    { deep: true, immediate: true }  // immediate: true 表示立即执行一次回调函数[界面加载第一次的时候也会执行一次回调函数]
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