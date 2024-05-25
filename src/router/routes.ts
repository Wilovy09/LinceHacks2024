const routes = [
    {
        path: "/",
        name: "home",
        component: () => import("@/views/home/HomeView.vue"),
    },
    {
        path: "/login",
        name: "login",
        component: () => import("@/views/login/LoginView.vue"),
    },
    {
        path: "/app",
        name: "layout",
        children: [
            {
                path: "",
                name: "home",
                component: () => import("@/views/home/HomeView.vue"),
            }
        ],

        component: () => import("@/layouts/Layout.vue"),
    }
]

export { routes }