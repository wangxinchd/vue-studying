<!-- toRefs 和 toRef学习 -->

<!-- 这里通过 v-model进行了双向绑定，修改输入框的数值，
 实际上是修改了name_xin和name_ming的值，并将其同步到span标签中 -->

<!-- 尽可能让模板代码更简洁 -->

<template>
    <div class="person">
        <h1>中国</h1>
        <h2 ref="title2">北京</h2>
        <button @click="showLog">点我输出h2这个元素</button>
    </div>
</template>

<!-- 选项式 app -->
<script lang="ts">
export default {
    name: 'Person',  // 组件名
}
</script>

<script lang="ts" setup>

import { ref } from 'vue';
let title2 = ref();
let a = ref(1);
let b = ref(2);
let c = ref(3);

function showLog() {
    console.log(title2.value);  //输出的data-v-4cadc14e 是局部样式 <h2 data-v-4cadc14e="">北京</h2>
}

// 这里暴露什么，父组件通过ref就能拿到什么
defineExpose({
    a,b
});

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