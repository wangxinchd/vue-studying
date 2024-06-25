<template>
    <ul>
        <li>编号: {{route.query.id}}</li>
        <li>标题: {{route.query.title}}</li>
        <li>内容: {{route.query.content}}</li>
    </ul>
</template>

<script setup lang="ts" name="Detail">
import { ref } from 'vue'
import { useRoute } from 'vue-router';

let route = useRoute();
</script>

<style scoped></style>