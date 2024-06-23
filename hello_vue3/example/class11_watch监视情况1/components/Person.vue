<!-- toRefs 和 toRef学习 -->

<!-- 这里通过 v-model进行了双向绑定，修改输入框的数值，
 实际上是修改了name_xin和name_ming的值，并将其同步到span标签中 -->

<!-- 尽可能让模板代码更简洁 -->

<template>
    <div class="person">
        <h1>情况一: 监视【ref】定义的【基本类型】数据</h1>
        <h1>当前数据: {{ sum }}</h1>
        <button @click="changeSum">改变数字看终端是否打印,监视数字的改变</button>
    </div>
</template>

<!-- 选项式 app -->
<script lang="ts">
export default {
    name: 'Person',  // 组件名
}
</script>

<script lang="ts" setup>
// watch 学习，主要是用于监视数据   【基本类型数据】

import { ref, watch } from 'vue'

let sum = ref(0)

function changeSum() {
    sum.value += 1
}


// 监视sum的变化
const stopWatch = watch(sum, (newVal, oldVal) => {
    console.log('sum changed: ', oldVal, "=>", newVal)

    if (newVal > 10) {
        console.log('sum is greater than 10 停止监视')
        stopWatch()
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