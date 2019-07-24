// 以模块的方式引入vue
const Vue = require('vue');
const vm = new Vue({
    // V
    el: '#demo',
    // M
    data: {
        name: 'yao',
        html: `<p>123<b style="color:red">456</b>789</p>`,
        bool: 8,
        arr: [{
            name: 'lin',
            id: 3,
            skill: []
        }, {
            name: 'yao',
            id: 1,
            skill: ['scss']
        }, {
            name: 'jing',
            id: 2,
            skill: ['php', 'java', 'scss']
        }]
    },
    // 模板
    template: `
        <div>
            <p>{{name}}</p>
            <p v-text="'name'"></p>
            <div v-html="html"></div>
            <div v-show="0">显示或者隐藏</div>
            <hr />
            <div v-if="bool>10">A</div>
            <div v-else-if="bool<9">B</div>
            <div v-else>C</div>
            <hr />
            <ul>
                <li  v-for="item in arr" v-if="item.name==='jing'" >
                   <p v-text="item.name"></p>
                   <p v-for="s in item.skill" v-text="s"></p>
                </li>
            </ul>
        </div>
    `
})
console.log(vm)