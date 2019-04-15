import { asyncImport as sync } from '@/Plugins'

export const ContainerComponent = sync( () => import( /* webpackChunkName: 'container' */ '@/Components/Container') )

export const Config = [
    {
        path : '/index',
        meta : '首页',
        icon : 'home',
        component : sync( () => import( /* webpackChunkName: 'index' */ '@/Pages/Home') ),
    },
    {
        path : '/user',
        meta : '用户管理',
        icon : 'user',
        component : sync( () => import( /* webpackChunkName: 'user' */ '@/Pages/User') ),
    },
]