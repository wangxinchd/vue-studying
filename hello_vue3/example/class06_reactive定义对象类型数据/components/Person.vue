<template>
    <div class="person">
        <h2>一辆{{ car.brand }}车，价值{{ car.price }}万</h2>
        <button @click="changePrice">修改汽车价格</button>
        <br>
        <ul>
            <li v-for="game in games" :key="game.id">{{ game.name }}</li>  
            <!-- 上面：的意思是将 "game.id"变成js的表达式 -->
        </ul>
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
    import { reactive } from 'vue';  // reactive函数用于创建响应式对象，不能处理基本类型
    
    let car = reactive({ brand: '宝马', price: 100 });
    let games = reactive([
        { id: 'game1', name: '王者荣耀' },  
        { id: 'game2', name: '绝地求生' },  
        { id: 'game3', name: '刺激战场' },  
        { id: 'game4', name: '英雄联盟' },  
    ]);


    function changePrice() {
        car.price += 10;
    }
    function changeFirstGameName() {
        games[0].name = '王者荣耀777';
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