<template>
    <div class="app">
        <h1>Hello Vue 3</h1>
        <Person ref="ren"/>
        <button @click="showLog">点击输出Person组件的信息</button>
    </div>
</template>

<script lang="ts" setup name="App">
import Person from './components/Person.vue'
import { ref } from 'vue'

let ren = ref()

function showLog() {
    console.log(ren.value)
}

</script>

<style scoped>
    .app {
        background-color: #ddd;
        box-shadow: 0 0 10px;
        border-radius: 10px;
        padding: 20px;
    }
</style>