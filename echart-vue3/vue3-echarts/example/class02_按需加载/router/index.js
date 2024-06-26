// 路由配置

import { createRouter, createWebHashHistory } from "vue-router";


const routes = [
  {
    path: "/index",
    name: "index",
    component: () => import("../views/index/Index.vue"),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;