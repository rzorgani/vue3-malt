import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/pages/Homepage.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () => import("@/pages/About.vue"),
  },
  {
    path: "/posts",
    name: "Posts",
    component: () => import("@/pages/Posts.vue"),
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
