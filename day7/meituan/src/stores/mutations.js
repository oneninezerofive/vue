export default {
    setAuthor(state, name) {
        state.author = name
        // 不需要return，跟getters很像
    },
    setName(state, name) {
        state.author = name
    },
    // 设置城市列表
    setArea(state, area) {
        state.area = area
    }
}