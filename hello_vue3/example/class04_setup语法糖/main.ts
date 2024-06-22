// 用于创建 Vue 应用并挂载到指定的 DOM 元素上
import { createApp } from 'vue'
// 导入 App 组件
import App from './App.vue'

const app = createApp(App)

app.mount('#app')
