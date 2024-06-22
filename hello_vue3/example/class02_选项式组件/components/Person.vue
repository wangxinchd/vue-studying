<template>
    <div class="person">
        <h2>{{ name }}</h2>
        <p>{{ age }}</p>
        <button @click="showTel">查看电话号码</button>
    </div>
</template>

<!-- 选项式 app -->
<script>
export
    default {
        name: 'Person',
        data() {  // 数据
            return {
                name: '张三',
                age: 25,
                tel: '13800138000'
            }
        },
        methods: { // 方法
            showTel() {
                alert(this.tel)
            }
        }
    }
</script>

<style scoped>
    .person {
        background-color: #3cce17;
        border: 1px solid #ccc;
    }
</style>