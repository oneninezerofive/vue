import Vue from 'vue'
// 自定义组件
import App from './App.vue'
// 全局引入
import axios from 'axios'

// 全局引入vuetouter
import VueRouter from 'vue-router'
// 安装路由
Vue.use(VueRouter)

// 定义路由组件
import Home from './views/Home'
import Detail from './views/Detail'

const routes = [{
    path: '/home',
    component: Home
  },
  {
    path: '/detail/:id/:name',
    component: Detail
  }
]

const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})

// Vue继承axios
Vue.prototype.$axios = axios
Vue.prototype.$author = () => {
  return 'yao'
}
// 引入vant的组件
import Vant from './vant/index'
Vant()

Vue.config.productionTip = false

new Vue({
  // 让容器装载这个路由插件
  router,
  render: h => h(App),
}).$mount('#app')