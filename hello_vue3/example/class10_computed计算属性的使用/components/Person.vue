<!-- toRefs 和 toRef学习 -->

<!-- 这里通过 v-model进行了双向绑定，修改输入框的数值，
 实际上是修改了name_xin和name_ming的值，并将其同步到span标签中 -->

<!-- 尽可能让模板代码更简洁 -->

<template>
    <div class="person">
        姓：<input type="text" v-model="name_xin"> <br> <!-- 这里也可以写成 v-model:value="name" -->
        名：<input type="text" v-model="name_ming"> <br> <!-- 这里也可以写成 v-model:value="name" -->
        <button @click="changfullname">修改全名</button> <br>

        全名: <span> {{ name_xin }}-{{ name_ming }} </span> <br>
        如果输出英文名字，首字母大写, 例如Zhang-san: <span> {{ fullname }} </span> <!-- 这里使用了计算属性，将姓和名拼接成全名 -->
    </div>
</template>

<!-- 选项式 app -->
<script lang="ts">
export default {
    name: 'Person',  // 组件名
}
</script>

<script lang="ts" setup>
import { ref, computed } from 'vue';

let name_xin = ref("张")
let name_ming = ref("三")

// 下面的代码，计算属性是只读的，不能修改
// let fullname = computed(() => {
//     return name_xin.value.slice(0,1).toUpperCase() + name_xin.value.slice(1) + '-' + name_ming.value
// })

// 下面的代码，计算属性是可修改的，可以修改fullname的值
let fullname = computed({
    get(){
        return name_xin.value.slice(0, 1).toUpperCase() + name_xin.value.slice(1) + '-' + name_ming.value
    },
    set(val){
        const [str1, str2] = val.split('-')
        name_xin.value = str1.slice(0, 1).toLowerCase() + str1.slice(1)
        name_ming.value = str2
    }
})

function changfullname() {
    fullname.value = "li-si"  // 修改fullname的值，会触发fullname的set方法，并更新span标签中的内容
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