<!--
路由学习
1. 安装路由插件：
npm install vue-router

2. 两个注意点：
1. 路由组件一般放在pags 或者 views 文件夹下，一般组件通常放在components 文件夹下。
2. 通过点击导航，视觉效果上消失的路由组件，默认是被e卸载的，需要的时会再挂载【点击之后就属于需要的时候】
-->

<template>
    <div class="app">
        <h2> vue路由测试</h2>
        <div class="nacigate">
            <RouterLink to="/home" active-class="active">首页</RouterLink>
            <RouterLink to="/news">新闻</RouterLink>
            <RouterLink to="/about">关于</RouterLink>

        </div>
        <!-- 展示区 -->
        <div class="main-content">
            <RouterView />
        </div>
    </div>

</template>

<script lang="ts" setup name="App">
import { RouterView, RouterLink } from 'vue-router';

</script>

<style scoped>
.app {
    background-color: #ddd;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
}
</style>