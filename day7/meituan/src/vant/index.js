import Vue from 'vue'
// 第三方组件
// 搜索
import {
    Search
} from 'vant';
// 宫格
import {
    Grid,
    GridItem
} from 'vant';
// 分割线
import {
    Divider
} from 'vant';
// 下拉菜单
import {
    DropdownMenu,
    DropdownItem
} from 'vant';
export default () => {
    Vue.use(Search);
    Vue.use(Grid).use(GridItem);
    Vue.use(Divider);
    Vue.use(DropdownMenu).use(DropdownItem);
}