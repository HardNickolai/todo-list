import { createRouter, createWebHistory } from "vue-router";
import type { NavigationGuard } from "../type/router";

const Main = () => import("../view/Main.vue");
const Login = () => import("../view/Login.vue");

const RoutePaths = {
  MAIN: "/",
  LOGIN: "/login",
} as const;

const routes = [
  {
    path: RoutePaths.MAIN,
    name: "Main",
    component: Main,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: RoutePaths.LOGIN,
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
    next(RoutePaths.LOGIN);
    return;
  }

  next();
};

router.beforeEach(authGuard);

export default router;
