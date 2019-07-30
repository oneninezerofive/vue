<template>
  <div>
    <!-- 搜索框 -->
    <van-search
      shape="round"
      v-model="value"
      placeholder="请输入搜索关键词"
      show-action
      @search="onSearch"
      background="#58bc58"
      label="广州"
    >
      <div slot="action" @click="onSearch">搜索</div>
    </van-search>
    <!-- 宫格 -->
    <van-grid>
      <van-grid-item
        v-for="(k,index) in kingkongListComputed"
        :key="index"
        :icon="k.icon"
        :text="k.name"
      />
    </van-grid>
    <!-- 分割线 -->
    <van-divider>附近商家</van-divider>
    <!-- 下拉菜单 -->
    <van-dropdown-menu>
      <van-dropdown-item v-model="value1" :options="menu|handleMenu" />
      <van-dropdown-item v-model="value1" :options="menu|handleMenu" />
    </van-dropdown-menu>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // 搜索框的值
      value: "",
      //   宫格
      kingkongList: [],
      //   下拉菜单
      value1: 0,
      menu: []
    };
  },
  methods: {
    onSearch() {}
  },
  computed: {
    kingkongListComputed() {
      // 切割成八个宫格
      return this.kingkongList.slice(0, 8);
    }
  },
  async created() {
    //   获取宫格数据
    let kingkongList = await this.$axios(
      "https://www.easy-mock.com/mock/5d3fe0fc738f621651cd1f4a/list/kingkong"
    );
    this.kingkongList = kingkongList.data.data.kingkongList;
    // 获取下拉菜单
    let menu = await this.$axios(
      "https://www.easy-mock.com/mock/5d3fe0fc738f621651cd1f4a/list/filterconditions"
    );
    this.menu = menu.data.data.sortVOList;
  },
  //   过滤器
  filters: {
    handleMenu(menu) {
      let newMenu = [];
      menu.forEach((element, index) => {
        //   往对象里面新增一个text属性值
        element.text = element.name;
        element.value = index;
        // 构造一个新的数组
        newMenu.push(element);
      });
      return newMenu;
    }
  }
};
</script>

