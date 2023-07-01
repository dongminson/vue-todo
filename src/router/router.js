import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/all',
        name: 'all',
        component: { template: null },
    },
    {
        path: '/active',
        name: 'active',
        component: { template: null },
    },
    {
        path: '/completed',
        name: 'completed',
        component: { template: null },
    },
    {
        path: '/:catchAll(.*)',
        redirect: '/all',
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;