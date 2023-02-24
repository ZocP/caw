
import {createRouter, createWebHistory} from 'vue-router'



const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../components/pages/Home')
    },
    {
        path:"/blog",
        name:"Blog",
        component: () => import('../components/pages/Blog')
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('../components/pages/About')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})


export default router
