// 所有的仓库的值都会放在这里面
// 状态===仓库的值

import areaList from './areaList/index'
export default {
    // 记录选中的城市列表信息
    area: [{
        name: '广州'
    }],
    // 所有城市列表信息
    areaList,
    author: 'yao',
    name: 'eno',
    ajaxUrl: 'http://xxxx',
    arr: ['ps', 'js', 'css'],
    plus(a, b) {
        return a + b
    }
}