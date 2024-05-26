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
<<<<<<< HEAD
                component: () => import("@/views/arrendadorHome/ArrendadorHomeView.vue")
            },
            {
                path: "/complete-profile",
                name: "complete-profile",
                component: () => import("@/views/completeProfile/StudentCompleteProfile.vue"),
=======
>>>>>>> 146a3bde4bcf50be040f446d0a54b281c51b1d13
            },
            {
                path: "newLivingPlace",
                name: "newLivingPlace",
                component: () => import("@/views/newLivingPlace/NewLivingPlaceView.vue")
            }
        ],
        component: () => import("@/layouts/Layout.vue"),
    }
]

export { routes }