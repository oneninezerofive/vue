export default {
    getAuthor(state) {
        // 获取数据，去做一次数据处理，等价于一个计算属性或者过滤器
        return state.author + 'abc'
    },
    getName(state) {
        // 获取数据，去做一次数据处理，等价于一个计算属性或者过滤器
        return state.name
    },
    // 获取城市列表
    getAreaList(state) {
        return state.areaList
    },
    getArea(state) {
        return state.area
    }
}