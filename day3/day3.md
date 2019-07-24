# 什么是Vue?

很重要的一个框架，是国产框架的佼佼者

前端三大框架中，唯一一个国产框架

目前世界上最流行的前端框架之一

vue,react,angular框架

小，轻量，简单

jquery是一个库

view类似读音 视图的意思，vue最终目的，所见即所得，用户看到的一切都用vue写

Vue 的核心库只关注视图层

# 安装

- 最简单的安装时从官网里面下载vue.js,用`<script></script>`标签引入到页面使用，也可以使用CDN引入

```html
<!-- 从本地引入 -->
<script src="vue.js"></script>
<!-- 从CDN服务器引入 -->
<script src="https://cdn.jsdelivr.net/npm/vue@2.6.10/dist/vue.js"></script>
```
- 配合npm和webpack
```
npm install vue --save
```
- vue-cli

# 调试工具

Vue Devtools用于调试vue的代码

你可以在访问谷歌商店的情况下，搜索vue-detools安装就可以了，如下图

<img src="1.png" />

不能访问

去github上面下载源代码

[vue-devtools源码地址](https://github.com/vuejs/vue-devtools.git)

在命令行里面输入一下代码，把vue-devtools源码从github克隆下来

```bash
git clone https://github.com/vuejs/vue-devtools.git
```

# hello world

jQuery,$全局拥有的

引入vue.js会在全局有一个Vue的全局变量

Vue是一个构造函数，拥有静态方法和原型方法
```js
function Vue(option){
    // 私有变量
    var a = 1
    // 公有变量
    this.name = option.name
    this.age = option.age
}
// 静态方法
Vue.extend = ()={

}
// 原型的方法
Vue.prototype.plus = ()=>{

}
var vm = new Vue({
    'yao',
    1
})
vm.name
```

```js
// 1.先实例化全局的Vue
var vm = new window.Vue({
    // 选项
})
console.log(vm)
```

# Model层

Vue在是实例化的时候需要在选项里面，初始化data数据，作为vue应用的数据，利用数据渲染到视图层上面
```js
// 1.先实例化全局的Vue
var vm = new window.Vue({
    // 选项
    // Model 数据层
    data: {
        name: 'yao',
        skill: [1, 2, 3],
        obj: {
            name: 'lin'
        },
        html: `<p>123</p>`,
        bool: true
    }
})
console.log(vm)
```

# View层

在选项里面可以添加一个el属性，element，元素节点，它需要放一个选择器，相当于
```js
document.querySelector() //相当于这个选择器
```
如果el是`#demo`是控制`<div id="demo"></div>`的视图范围，一般建议用id选择器
```html
<div id="demo">
    <p>{{name}}</p>
    <p>{{age}}</p>
</div>
<script src="../vue.js"></script>
<script>
    // 1.先实例化全局的Vue
    var vm = new window.Vue({
        // 选项
        // View 视图层
        el: '#demo',
        // Model 数据层
        data: {
            name: 'yao',
            age: 2
        }
    })
    console.log(vm)
</script>
```

# MV概念 MVVM

model->view

数据从data被vue绑定到视图层上面

<img src="2.png" />

# 模板语法

数据绑定最常见的形式就是使用“Mustache”语法 (双大括号) 的文本插值：

支持多元表达式

```html
<div id="demo">
<p>{{name}}</p>
<!-- 属性值操作 -->
<p>{{arr[0]}}</p>
<p>{{obj.skill}}</p>
<p>{{obj.skill}}</p>
<!-- 支持多元预算 -->
<!-- if else -->
<p>{{-age}}</p>
<p>{{name+age}}</p>
<p>{{age+8+'abc'}}</p>
<p>{{age>0?1:2}}</p>
</div>
<script src="../vue.js">
</script>
<script>
new Vue({
    el: "#demo",
    data: {
        name: 'yao',
        arr: ['a', 'b', 'c'],
        obj: {
            skill: 'ps,js,css'
        },
        age: 0
    }
})
</script>
```