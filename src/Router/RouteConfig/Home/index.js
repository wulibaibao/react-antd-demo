import one from './one'
import two from './two'
import { asyncImport as sync } from '@/Plugins'

export default {
    path : '/home',
    meta : '主页',
    role : '',
    component : sync(() => import( /* webpackChunkName: 'home' */ '@/Pages/Home/index.js')),
    children : [
        one,
        two,
    ]
}