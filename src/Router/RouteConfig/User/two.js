import { asyncImport as sync } from '@/Plugins'
export default {
    path : '/two',
    meta : '嵌套2',
    role : '',
    component : sync(() => import ( /* webpackChunkName: 'user_page_two' */ '@/Pages/User/two')),
    children : [], 
}