import { asyncImport as sync } from '@/Plugins'

export default {
    path : '/one',
    meta : '嵌套1',
    role : '',
    component : sync(() => import ( /* webpackChunkName: 'user_page_one' */ '@/Pages/User/one')), 
    children : [],
}