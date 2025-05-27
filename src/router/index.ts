import { createRouter, createWebHistory } from "vue-router";
import Main from "../view/Main.vue";
import Login from "../view/Login.vue";

const routes = [
  {
    path: "/",
    name: "Main",
    component: Main,
  },
  {
    path: "/about",
    name: "Login",
    component: Login,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
