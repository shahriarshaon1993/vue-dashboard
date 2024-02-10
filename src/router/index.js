import { createRouter, createWebHistory } from "vue-router";

import DefaultLayout from '@/components/layouts/DefaultLayout.vue';
import AuthLayout from "@/components/layouts/AuthLayout.vue";
import Login from "@/pages/auth/Login.vue";
import Dashboard from "@/pages/Dashboard.vue";
import ElementAlerts from "@/pages/elements/Alerts.vue";
import ElementButtons from "@/pages/elements/Buttons.vue";
import ElementInputs from "@/pages/elements/Inputs.vue";
import ElementPagination from "@/pages/elements/Paginations.vue";

const routes = [
    {
        path: '/',
        redirect: '/dashboard',
        component: DefaultLayout,
        meta: { requiresAuth: true },
        children: [
            {path: '/dashboard', name: 'Dashboard', component: Dashboard, meta: {title: 'Dashboard'}},
            {path: '/elements/alerts', name: 'ElementAlerts', component: ElementAlerts, meta: {title: 'Element alerts'}},
            {path: '/elements/buttons', name: 'ElementButtons', component: ElementButtons, meta: {title: 'Element buttons'}},
            {path: '/elements/inputs', name: 'ElementInputs', component: ElementInputs, meta: {title: 'Element inputs'}},
            {path: '/elements/pagination', name: 'ElementPagination', component: ElementPagination, meta: {title: 'Element pagination'}},
        ]
    },
    {
        path: '/auth',
        redirect: '/login',
        component: AuthLayout,
        meta: { isGuest: true },
        children: [
            { path: '/login', name: 'Login', component: Login, meta: {title: 'Login'} },
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
    document.title = to.meta?.title ?? 'Dashboard'
    if (to.meta.requiresAuth && !user.token) {
        next({ name: 'Login' });
    } else if (user.token && (to.meta.isGuest)) {
        next({ name: 'Dashboard' });
    } else {
        next();
    }
});

export default router;