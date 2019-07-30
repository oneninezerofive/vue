import Vue from 'vue'
// 自定义组件
import App from './App.vue'
// 全局引入
import axios from 'axios'
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
  render: h => h(App),
}).$mount('#app')