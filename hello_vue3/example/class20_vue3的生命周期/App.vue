<template>
    <div class="app">
        <Person v-if="isShow"/>   <!-- 通过vue插件修改 isShow数值,可以卸载插件 -->
    </div>
</template>

<script lang="ts" setup name="App">
import Person from './components/Person.vue';
import { ref } from 'vue';

let isShow = ref(true);

</script>

<style scoped>
.app {
    background-color: #ddd;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
}
</style>