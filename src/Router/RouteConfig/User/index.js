import one from './one'
import two from './two'
import { asyncImport as sync } from '@/Plugins'
export default {
    path : '/user',
    meta : '用户',
    role : '',
    component : sync(() => import( /* webpackChunkName: 'user' */ '@/Pages/User/index.js')),
    children : [
        one,
        two,
    ]
}