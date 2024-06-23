<!-- 
vue3的生命周期
onBeforeMount // 组件实例被创建，但未挂载到 DOM 树中。
onMounted // 组件实例被挂载到 DOM 树中。

onBeforeUpdate // 组件数据更新，但未触发重新渲染。
onUpdated // 组件完成重新渲染。

onBeforeUnmount // 组件实例销毁，但未从 DOM 树中移除。
onUnmounted // 组件实例被完全销毁，且从 DOM 树中移除。
-->

<template>
  <div class="person">
    <h2>当前求和为：{{ sum }}</h2>
    <button @click="add">点我加1 </button>
  </div>

</template>

<!-- 选项式 app -->
<script lang="ts" setup name="Person">
import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted, ref } from 'vue'
const sum = ref(0)

function add() {
  sum.value++
}

// 创建
console.log('created')


// 挂载前，帮忙调用一个函数
onBeforeMount(() => {
  console.log('mounted before')
})

// 挂载后
onMounted(() => {
  console.log('mounted after')
})

// 更新
onBeforeUpdate(() => {
  console.log('updated before')
})

// 更新完毕
onUpdated(() => {
  console.log('updated after')
})

// 卸载前
onBeforeUnmount(() => {
  console.log('unmounted before')
})

// 卸载后
onUnmounted(() => {
  console.log('unmounted after')
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