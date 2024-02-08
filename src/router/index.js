import { createRouter, createWebHistory } from "vue-router";

import DefaultLayout from '@/components/layouts/DefaultLayout.vue';
import AuthLayout from "@/components/layouts/AuthLayout.vue";
import Login from "@/pages/auth/Login.vue";
import Dashboard from "@/pages/Dashboard.vue";

const routes = [
    {
        path: '/',
        redirect: '/dashboard',
        component: DefaultLayout,
        meta: { requiresAuth: true },
        children: [
            { path: '/dashboard', name: 'Dashboard', component: Dashboard }
        ]
    },
    {
        path: '/auth',
        redirect: '/login',
        component: AuthLayout,
        meta: { isGuest: true },
        children: [
            { path: '/login', name: 'Login', component: Login },
        ]
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

const user = {
    token: 123
};

router.beforeEach((to, form, next) => {
    if (to.meta.requiresAuth && !user.token) {
        next({ name: 'Login' });
    } else if (user.token && (to.meta.isGuest)) {
        next({ name: 'Dashboard' });
    } else {
        next();
    }
});

export default router;