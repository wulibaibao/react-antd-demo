import { asyncImport as sync } from '@/Plugins'

export default {
    path : '/two',
    meta : '嵌套2',
    role : '',
    component : sync(() => import ( /* webpackChunkName: 'home_page_one' */ '@/Pages/Home/two')), 
    children : [],
}