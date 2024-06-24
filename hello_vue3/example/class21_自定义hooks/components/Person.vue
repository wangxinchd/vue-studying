<!-- 
axios 
1. npm install axios


学习封装，即如何将数据和方法封装到一个组件中，使得代码更加简洁，可复用。

-->
<template>
  <div class="person">
    <h2>当前求和: {{ sum }}, 放大10倍: {{ bigSum }}</h2>
    <button @click="add">点我+1</button>
    <hr>
    <ul>
      <!-- dog 图片url index是列表的索引 -->
      <img v-for="(dog, index) in dogList" :src="dog" :key="index">
    </ul>
    <button @click="getDog">获取狗狗图片</button>
  </div>

</template>

<!-- 选项式 app -->
<script lang="ts" setup name="Person">

import useSum from '@/hooks/useSum';
import useDog from '@/hooks/useDog';

const { sum, add, bigSum } = useSum();
const { dogList, getDog } = useDog();

</script>

<style scoped>
.person {
  background-color: #3cce17;
  border: 1px solid #ccc;
}

li {
  font-size: 20px;
}

/* 元素选择器 */
img {
  height: 100px;
}
</style>