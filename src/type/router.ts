import { type RouteLocationNormalized } from "vue-router";

export type RouteName = "Main" | "Login";
export type NavigationGuard = (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: (path?: string) => void
) => void;
