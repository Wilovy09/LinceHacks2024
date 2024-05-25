import { createRouter, createWebHistory } from "vue-router";
import { routes } from "./routes";
import { useUserStore } from "@/stores/useUserStore";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: routes,
});

/**
 * router.beforeEach((to, from, next) => {
    const hasCompleteProfile = false;

    if (hasCompleteProfile == false && to.meta.requiresAuth) { {
        next('/login')
    }



    next()
}})
 */

export default router;
