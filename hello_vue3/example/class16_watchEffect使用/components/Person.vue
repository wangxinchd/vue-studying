<!-- toRefs 和 toRef学习 -->

<!-- 这里通过 v-model进行了双向绑定，修改输入框的数值，
 实际上是修改了name_xin和name_ming的值，并将其同步到span标签中 -->

<!-- 尽可能让模板代码更简洁 -->

<template>
    <div class="person">
        <h2>需求: 水温到达60℃,或者水位到达80cm</h2>
        <h2>当前水温: {{ temp }} ℃</h2> <br>
        <h2>当前水位置: {{ height }} cm</h2>
        <button @click="changeTemp">水温+10</button>
        <button @click="changeHeight">水位+10</button>
    </div>
</template>

<!-- 选项式 app -->
<script lang="ts">
export default {
    name: 'Person',  // 组件名
}
</script>

<script lang="ts" setup>
import { ref, watch, watchEffect } from 'vue'

let temp = ref(10)  // 定义一个变量，用于存储水位
let height = ref(0)  // 定义一个变量，用于存储当前水位

function changeTemp() {
    temp.value += 10  // 修改变量的值
}

function changeHeight() {
    height.value += 10  // 修改变量的值
}

// watch 需要明确只是监视谁
// watch(
//     [temp, height],
//     (value) => {
//         // 从values中取出水温和水位
//         let [newTemp, newHeight] = value

//         if (newTemp > 60 || newHeight > 80) {
//             console.log('给服务器发送请求：水位过高')
//         }
//     },
//     { deep: true }
// )

// 不需要指定监视谁
watchEffect(() => {
    if (temp.value > 60 || height.value > 80) {
        console.log('给服务器发送请求：水位过高')
        console.log(temp.value, height.value)
    }
})

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