<template>
  <div>详情页</div>
</template>
<script>
// 利用辅助方法获取值
import { mapGetters } from "vuex";
export default {
  // 接收路由组建传给我的props
  props: ["default", "sidebar"],
  created() {
    // 触发action
    this.$store.dispatch("setAuthor", "oooo");
    // 通知mumtation去修改state里面的值
    // this.$store.commit("setAuthor", "lin");
    // console.log(this.$store._mutations.setAuthor);
    // console.log(this.$store.getters.getAuthor);
    // console.log(this.$store.state.author);
  },
  computed: {
    // 从vuex获取值手段
    // author() {
    //   // 从仓库把author获取到组件内部
    //   return this.$store.getters.getAuthor;
    // },
    // 用辅助函数触发vuex中getters的getAuthor函数获取author
    ...mapGetters(["getAuthor", "getName"])
  }
};
</script>

