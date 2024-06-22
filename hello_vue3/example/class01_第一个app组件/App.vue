<template> <!-- 写html代码 -->
  <div class="app">
    <h1>Hello Vue 3</h1>
  </div>
</template>

<script lang="ts">
export default {
  name: 'App' // 组件名称 默认暴露
}
</script>

<!-- 样式 -->
<style scoped>
  .app { /* 针对class设置为app的组件样式 */
      font-size: 20px;
      background-color: #ddd;
      box-shadow: 0 0 10px;
      border-radius: 10px;
      padding: 20px;
   }
</style>
