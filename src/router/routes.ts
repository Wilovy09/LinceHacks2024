const routes = [
    {
        path: "/",
        name: "landingLayout",
        meta: { requiresAuth: false },
        component: () => import("@/layouts/LandingLayout.vue"),
        children: [
            {
                path: "",
                name: "landing",
                component: () => import("@/views/landing/LandingPage.vue"),
            },
        ],
    },
    {
        path: "/login",
        name: "login",
        meta: { requiresAuth: false },
        component: () => import("@/views/login/LoginView.vue"),
    },
    {
        path: "/register",
        name: "register",
        meta: { requiresAuth: false },
        component: () => import("@/views/createAccount/CreateAccountView.vue"),
    },
    {
        path: "/app",
        name: "layout",
        meta: { requiresAuth: true },
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