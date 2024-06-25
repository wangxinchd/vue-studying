<!-- 这里新闻是一个一级路由，通过点击里面的自选项得到具体的新闻内容 -->

<template>
    <div class="news">
        <h1>新闻组件</h1>
        <p>This is a simple Vue 3 app with a single component.</p>
        <ul>
            <li v-for="news in newsList" :key="news.id">
                <!-- 默认都一样 -->
                <!-- <RouterLink to="/news/detail">{{ news.title }}</RouterLink> -->

                <!-- 第一种方式，通过路由参数传递，这种方式比较麻烦，需要在路由中定义路由参数，然后在组件中接收参数，比较繁琐 -->
                <!-- <RouterLink :to="`/news/detail?id=${news.id}&title=${news.title}&content=${news.content}`">{{ news.title }}</RouterLink> -->

                <RouterLink :to="{
                        name: 'xingwenbianhao',
                        query: { id: news.id, title: news.title, content: news.content }
                    }">
                    {{ news.title }}
                </RouterLink>
            </li>
        </ul>
    </div>
    <div class="news-detail">
        <RouterView></RouterView>
    </div>
</template>

<script lang="ts" setup name="News">
import { reactive } from 'vue';
import { RouterLink } from 'vue-router';
import { RouterView } from 'vue-router';

const newsList = reactive([
    {
        id: '1',
        title: '一种抗癌食物',
        content: '一种抗癌食物被发现，据说可以治愈癌症。'
    },
    {
        id: '2',
        title: '如何一夜暴富',
        content: '如何一夜暴富 内容'

    },
    {
        id: '3',
        title: '震惊',
        content: '震惊 内容'
    },
    {
        id: '4',
        title: '好消息好消息',
        content: '好消息好消息 内容'
    }
]);

</script>