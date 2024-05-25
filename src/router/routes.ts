const routes = [
    {
        path: "/",
        name: "landingLayout",
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
            },
            {
                path: "completeAccount",
                name: "completeAccount",
                component: () => import("@/views/completeAccount/CompleteAccountView.vue"),
            }
        ],

        component: () => import("@/layouts/Layout.vue"),
    }
]

export { routes }