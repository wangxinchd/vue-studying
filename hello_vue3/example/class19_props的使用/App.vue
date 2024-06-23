<template>
    <div class="app">
        <!--  传递props给子组件 -->
        <Person a="haha" :list="persons" /> <!-- :list传递数组对象不是字符串 -->
        <br>
        <p>下面不传递参数</p>
        <Person a="haha"  /> <!-- :list传递数组对象不是字符串 -->
    </div>
</template>

<script lang="ts" setup name="App">
import { reactive } from 'vue';
import Person from './components/Person.vue';
import { type Persons } from '@/types';

let persons = reactive<Persons>([
    { id: '1', name: '张三', age: 25 },
    { id: '2', name: '王五', age: 28 }
]);


</script>

<style scoped>
.app {
    background-color: #ddd;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
}
</style>