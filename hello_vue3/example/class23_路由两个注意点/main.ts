// 用于创建 Vue 应用并挂载到指定的 DOM 元素上
import { createApp } from 'vue'
// 导入 App 组件
import App from './App.vue'
// 引入路由器
import router from './router'

const app = createApp(App) // 创建 vue 整个应用实例

app.use(router) // 注册路由器

app.mount('#app')
