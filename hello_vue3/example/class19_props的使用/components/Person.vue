<template>
    <div class="person">
        <ul>
            <!-- :key 后面的数据不是字符串，而是对应的变量 -->
            <li v-for="(item, index) in list" :key="index">{{ item }}</li>
        </ul>
    </div>

</template>

<!-- 选项式 app -->
<script lang="ts" setup name="Person">
import type { Persons } from '@/types';
import { defineProps, withDefaults } from 'vue';

// 接收父组件传递的 props
// let x = defineProps(['a', 'list']);

// 限制父组件传递类型
// let x = defineProps<{list: Persons}>()
// console.log("props: ", x)


// 接收list + 限制类型 + 限制必要性 + 执行默认类型
let x = withDefaults(defineProps<{ list?: Persons }>(),
    {
        list: () => [   // 这里需要写成一个函数
            {
                id: '1',
                name: '张三2333',
                age: 20
            },
            {
                id: '2',
                name: '李四4555',
                age: 25,
            }
        ]
    }) // ?: 可选参数

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