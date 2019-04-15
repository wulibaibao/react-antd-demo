import { asyncImport as sync } from '@/Plugins'

export default {
    path : '/one',
    meta : '嵌套1',
    role : '',
    component : sync(() => import ( /* webpackChunkName: 'home_page_one' */ '@/Pages/Home/one')), 
    children : []
}