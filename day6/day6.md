# 项目化

- 单文件组件
- vue-cli脚手架(webpack上层建筑)

# 样式我们用ui

我们只写逻辑，跟vue

样式给忽略掉

ui，除了网上截取的样式，用大厂的weui，ant-design，element-ui


# 单文件组件

在很多 Vue 项目中，我们使用 Vue.component 来定义全局组件，紧接着用 new Vue({ el: '#container '}) 在每个页面内指定一个容器元素。

这种方式在很多中小规模的项目中运作的很好，在这些项目里 JavaScript 只被用来加强特定的视图。但当在更复杂的项目中，或者你的前端完全由 JavaScript 驱动的时候，下面这些缺点将变得非常明显
```js
Vue.extend()
Vue.component({
    template: `
        <div>hello world</div>
    `
})
```
所以单文件组件是解决大型复杂项目的一个方案

文件扩展名为 `.vue` 的 single-file components(单文件组件) 为以上所有问题提供了解决方法

.vue本质就是把html,js,css写在一份叫.vue的文件里面

从这个单文件组件开始组装一个用用，vue文件帮你封装每个组件的所有内容

过去我们要这样定义一个组件
```js
const Vue = require('vue');
Vue.component('xheader', {
    template: `
        <header>头部组件</header>
    `
})
const vm = new Vue({
    // V
    el: '#demo',
    template: `
        <xheader></xheader>
    `
})
console.log(vm)
```
那现在我们就做改变了,要用一份.vue的后缀文件去重写上面的组件

可以在里面用`scoped`属性值实现局部样式
```html
<style scoped>
</style>
```
由于你改写了上面的那份文件，是非JS后缀的Vue文件，所以需要一个加载器在webpack做处理，那个加载器就是vue-loader



# Vue Loader 是什么？

Vue Loader 是一个 webpack 的 loader，它允许你以一种名为单文件组件 (SFCs)的格式撰写 Vue 组件：

安装两个模块，一个是加载器，一个用于处理template

```bash
npm install -D vue-loader vue-template-compiler
```
在webpack.config.js的加载器配置里面加入vue-loader的配置，记得引入插件
```js
// webpack.config.js
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  module: {
    rules: [
      // ... 其它规则
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  plugins: [
    // 请确保引入这个插件！
    new VueLoaderPlugin()
  ]
}
```
ES5的模块化写法，Vue都是默认支持ES6
```js
// 以模块的方式引入vue
const Vue = require('vue/dist/vue');
// const Vue = require('vue');
// import Vue from 'vue'
// Vue.component('xheader', {
//     template: `
//         <header>头部组件</header>
//     `
// })
// 等价Vue.extend()
const xheader = require('./components/xheader.vue')
// 全局注册
// Vue.component('xheader', xheader)
console.log(xheader)
const vm = new Vue({
    // V
    el: '#demo',
    // render(creatElement) {
    //     return creatElement("xheader")
    // },
    components: {
        // 注册
        xheader: xheader.default
    },
    template: `
        <xheader></xheader>
    `,
    // template,
    // render
})
console.log(vm)
```

# Common.js规范和ES6规范

## 引入
Common.js，是node规范
```js
const xheader = require('./components/xheader.vue')
```
es6规范
```js
import xheader from './components/xheader.vue'
```

## 导出

Common.js，是node规范
```js
module.exports = {
  // 选项
  data() {
    return {
      title: "头部组件"
    };
  }
};
```
es6规范
```js
export default {
  // 选项
  data() {
    return {
      title: "头部组件"
    };
  }
};
```