import Vue from 'vue'
import App from './App.vue'

// 微信UI
import 'weui'

import router from './router'

// 设置为 false 以阻止 vue 在启动时生成生产提示。
Vue.config.productionTip = false

new Vue({
  el: "#app",
  router,

  render(createElement) {
    return createElement(App)
  }
})
// .$mount('#app')