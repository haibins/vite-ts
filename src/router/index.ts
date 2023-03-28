import { getToken } from '@/utils/token';
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Index',
        meta: {
            title: 'Home Page',
            keepAlive: true,
            requireAuth: false,
        },
        component: () => import('@/views/Index.vue'),
    },
    {
        path: '/create',
        name: 'Create',
        meta: {
            title: 'Create Page',
            keepAlive: true,
            requireAuth: true,
        },
        component: () => import('@/views/Create.vue'),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach(async (to, from) => {
    const token = getToken();
    if (!token && to.name !== 'Index') {
        return { name: 'Index' };
    }
});

export default router;
