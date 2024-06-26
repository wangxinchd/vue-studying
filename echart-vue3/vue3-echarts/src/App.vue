<script setup>
import NaviMenu from './views/NaviMenu.vue';



</script>

<template>
  <div id="module">
    <el-container>

      <!-- 侧边栏 -->
      <NaviMenu />


      <el-container>
        <!-- 主体头部 -->
        <el-header class="header-title">
          <div class="header-title"> 数据可视化 图表展示</div>
        </el-header>

        <!-- 主体内容 -->
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped>
/* html, body {
  height: 100%;
  margin: 0;
} */
.header-title {
  font-size: 24px;
  font-weight: bold;
  color: #303133;
  text-align: center;
  padding: 0;
  margin: 0;
}

</style>
