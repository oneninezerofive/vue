<template>
  <div>
    <router-view></router-view>
    <!-- 标签栏 -->
    <van-tabbar :route="true" v-model="active">
      <!-- 声明式导航 :url="t.url" -->
      <van-tabbar-item
        @click="navTo(t.url)"
        v-for="(t,index) in tabbarsItems"
        :key="index"
        :icon="t.icon"
        v-text="t.title"
      ></van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // 记录你所在第几项
      active: 0,
      tabbarsItems: [
        {
          title: "首页",
          // 路由名字
          url: "home",
          // 图标
          icon: "home-o"
        },
        {
          title: "订单页",
          url: "order",
          icon: "search"
        },
        {
          title: "我的",
          url: "mine",
          icon: "friends-o"
        }
      ]
    };
  },
  methods: {
    navTo(name) {
      // 编程式导航
      this.$router.push({
        name
      });
    }
  }
};
</script>