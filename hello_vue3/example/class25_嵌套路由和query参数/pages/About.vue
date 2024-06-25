<template>
    <div class="about">
        <h1>关于组件</h1>
        <p>This is a simple Vue 3 app with a single component.</p>
    </div>
</template>

<script lang="ts" setup name="About">
import { onMounted, onUnmounted } from "vue"

// 切换界面之后，如果点击关于，会挂载组件，如果点击其他，会卸载关于组件
onMounted(
    () => {
        console.log("About component mounted")
    }
)

onUnmounted(
    () => {
        console.log("About component unmounted")
    }
)

</script>