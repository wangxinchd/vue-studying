// 路由配置

import { createRouter, createWebHashHistory } from "vue-router";


const routes = [
  {
    path: "/index",  // 首页
    name: "index",
    component: () => import("../src/views/index/Index.vue"),
  },
  {
    path: "/barChart", // 柱状图
    name: "barChart",
    component: () => import("../src/views/barChart/Index.vue"),
  },
  {
    path: "/lineChart",  // 折线图
    name: "lineChart",
    component: () => import("../src/views/lineChart/Index.vue"),
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;