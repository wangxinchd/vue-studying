<!-- 
导航学习
-->
<template>


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