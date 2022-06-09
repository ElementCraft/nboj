import {createRouter, createWebHistory} from 'vue-router'
import {routes} from './routers'
 
export const router = createRouter({
    history: createWebHistory(), 
    routes
});