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

// store.state来去获取state
// store.commit触发mutations