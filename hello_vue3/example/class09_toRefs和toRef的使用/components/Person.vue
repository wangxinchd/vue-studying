<!-- toRefs 和 toRef学习 -->


<template>
    <div class="person">
        <h2>名字: {{ name }}!</h2>
        <p>年龄: {{ age }}</p>
        <button @click="changeName">Change Name</button>
        <button @click="changeAge">Change Age</button>
        <ul>
            <li v-for="(hobby, index) in hobby" :key="index">{{ hobby }}</li>
        </ul>
    </div>
</template>

<!-- 选项式 app -->
<script lang="ts">
    export default {
        name: 'Person',  // 组件名
    }
</script>

<script lang="ts" setup>
    import { reactive, toRefs, toRef } from 'vue';

    let person = reactive({
        name: '张三',
        age: 20,
        hobby: ['reading', 'running', 'coding']
    });

    let { name, age, hobby } = toRefs(person);


    // 也可以这样写
    // let name = toRef(person, 'name');
    // let age = toRef(person, 'age');
    // let hobby = toRef(person, 'hobby');

    function changeName() {
        name.value += "~"
    }

    function changeAge() {
        age.value += 1
    }





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