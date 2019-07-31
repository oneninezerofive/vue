import Vue from 'vue'
// 全局引入vuetouter
import VueRouter from 'vue-router'
// 安装路由
Vue.use(VueRouter)

// 定义路由组件
import Tabbar from './views/Tabbar'
import Detail from './views/Detail'

// 嵌套组件
import Home from './views/Tabbar/Home'
// 订单页
import Order from './views/Tabbar/Order'
// 我的
import Mine from './views/Tabbar/Mine'

const routes = [{
        name: 'tabbar',
        path: '/tabbar',
        component: Tabbar,
        // 嵌套路由，先进底部选项卡，再去找首页
        children: [{
            name: 'home',
            // 第二层路由的path是没有/
            path: 'home',
            component: Home,
        }, {
            name: 'order',
            path: 'order',
            component: Order,
        }, {
            name: 'mine',
            path: 'mine',
            component: Mine,
        }]
    },
    {
        name: 'detail',
        path: '/detail/:id/:name',
        component: Detail
    }
]

const router = new VueRouter({
    routes // (缩写) 相当于 routes: routes
})

export default router