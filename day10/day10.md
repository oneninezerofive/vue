# vuex

vuex modules 模块的改变

模块化仓库，让仓库变得更细分
```js
modules: {
    miniStore: {
        state: {
            name: 'aaaa'
        },
        getters: {}
    }
}
```

项目结构，可以把每个文件单独模块出来
```js
import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import modules from './modules'
Vue.use(Vuex)

// 初始化一个仓库
const store = new Vuex.Store({
    state,
    // 用于修改仓库里面的值
    mutations,
    actions,
    // 定义getters方法
    getters,
    // 模块，仓库里面小的仓库
    modules
})
// 导出仓库
export default store
```
配合辅助函数`mapGetters`
```js
computed: {
// 从vuex获取值手段
// author() {
//   // 从仓库把author获取到组件内部
//   return this.$store.getters.getAuthor;
// },
// 用辅助函数触发vuex中getters的getAuthor函数获取author
...mapGetters(["getAuthor", "getName"])
}
```