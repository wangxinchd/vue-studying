<template>
    <div class="person">
        <h2>一辆{{ car.brand }}车，价值{{ car.price }}万</h2>
        <button @click="changeBrand">修改汽车品牌</button>
        <button @click="changePrice">修改汽车价格</button>
        <button @click="changeCar">修改汽车对象</button>
        <br>
        <h2>第一个游戏是{{ sum.name }}, 它的id是{{ sum.id }}</h2>
        <button @click="changeFirstGameName">修改第一个游戏的名字</button>
    </div>
</template>

<!-- 选项式 app -->
<script lang="ts">
    export default {
        name: 'Person',  // 组件名
    }
</script>

<script lang="ts" setup>
    import { ref, reactive } from 'vue';  // ref用于创建响应式对象
    
    let car = reactive({ brand: '宝马', price: 100 });
    let sum = ref({
        id: 1,
        name: '王者荣耀',
    });


    function changeBrand() {
        car.brand = '奔驰';
    }

    function changePrice() {
        car.price += 10;
    }

    function changeCar() {
        // car = { brand: '奔驰', price: 200 }; // 这样写页面不更新， 不能直接修改对象，需要重新赋值
        // car = reactive({ brand: '奔驰', price: 200 }); // 这样写页面不更新， 不能直接修改对象，需要重新赋值
        Object.assign(car, { brand: '奔驰', price: 200 }); // 直接修改对象
    }

    function changeFirstGameName() {
        sum.value = { id: 1909, name: '绝地求生' };  // 如果使用ref，可以直接修改对象的值
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