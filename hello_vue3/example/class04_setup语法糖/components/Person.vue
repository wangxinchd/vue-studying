<template>
    <div class="person">
        <h2>{{ name }}</h2>
        <p>{{ age }}</p>
        <button @click="changeName">修改名字</button>
        <button @click="changeAge">修改年龄</button>
        <button @click="showTel">查看电话号码</button>
    </div>
</template>

<!-- 选项式 app -->
<script lang="ts">
    export default {
        name: 'Person',  // 组件名
    }
</script>

<script lang="ts" setup>
    let a = 666;
    let name = '张三';
    let age = 25;
    let tel = '13812345678';


    function changeName() {
        name = "李四"
    }

    function changeAge() {
        age += 1;
    }

    function showTel() {
        alert("电话号码是：" + tel);
    }
</script>



<style scoped>
.person {
    background-color: #3cce17;
    border: 1px solid #ccc;
}
</style>