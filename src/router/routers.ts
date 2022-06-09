

export const routes = [
    {
        name: 'index',
        path: '/',
        component: () => import('../pages/RoleList.vue')
    },
    {
        name: 'roleList',
        path: '/role/list',
        component: () => import('../pages/RoleList.vue')
    }
    
];