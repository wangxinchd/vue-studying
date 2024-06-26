<script setup>
import {
    Document,
    Menu as IconMenu,
    Location,
    Setting,
} from '@element-plus/icons-vue'

</script>

<template>

    <!-- 侧边栏 -->
    <el-aside width="200px" class="el-aside-demo">
        <el-menu default-active="2" class="el-menu-vertical-demo"
            router="false"
        >
            <el-menu-item index="/index">
                <el-icon><icon-menu /></el-icon>
                <span>首页</span>
            </el-menu-item>
            <el-menu-item index="/barChart">
                <el-icon><icon-menu /></el-icon>
                <span>柱状图</span>
            </el-menu-item>
            <el-menu-item index="/lineChart">
                <el-icon><icon-menu /></el-icon>
                <span>折线图</span>
            </el-menu-item>
        </el-menu>
    </el-aside>

</template>

<style scoped lang="scss">
.el-aside-demo {
    background-color: #f0f2f5;
    display: flex;
    min-height: 100vh; /* 使用最小高度为视口高度来确保侧边栏和内容区域至少填满一屏 */

    .el-menu-vertical-demo {
        width: 200px;
        height: 100%;
        background-color: #f0f2f5;
    }
}
</style>
