// 创建一个路由器,并导出

// 第一步：导入 createRouter 方法
import { createRouter, createWebHistory } from 'vue-router'
// 引入要呈现的路由组件
import Home from '@/components/Home.vue'
import News from '@/components/News.vue'
import About from '@/components/About.vue'

// 第二步：创建路由实例
const router = createRouter({
    history: createWebHistory(),  // 路由器的工作模式
    // 配置路由规则
    routes: [
        {
            name: 'zhuye',
            path: '/home',
            component: Home 
        },
        {
            name: 'xinwen',
            path: '/news',
            component: News
        },
        {
            name: 'guanyu',
            path: '/about',
            component: About
        }

    ]   // routes: route是路由，这里router路由器管理多个路由
})


export default router