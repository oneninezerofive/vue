export default {
    setAuthor(context, name) {
        // 在action里面触发commit
        context.commit('setAuthor', name)
    }
}