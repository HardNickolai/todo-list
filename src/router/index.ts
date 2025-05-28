import { createRouter, createWebHistory } from "vue-router";
import type { NavigationGuard } from "../type/router";

const Main = () => import("../view/Main.vue");
const Login = () => import("../view/Login.vue");

const routes = [
  {
    path: "/",
    name: "Main",
    component: Main,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: {
      requiresAuth: false,
    },
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes,
});

const authGuard: NavigationGuard = (to, _, next) => {
  const isAuthenticated = Boolean(localStorage.getItem("userInfo"));
  const requiresAuth = to.meta.requiresAuth;

  if (requiresAuth && !isAuthenticated) {
    next("/login");
    return;
  }

  next();
};

router.beforeEach(authGuard);

export default router;
