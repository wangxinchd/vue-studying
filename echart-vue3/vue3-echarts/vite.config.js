import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'


// 按需引入element-plus
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({ // 按需引入element-plus按需导入
      resolvers: [ElementPlusResolver()],
    })
  ],

})
