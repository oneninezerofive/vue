# 全局API

它是Vue提供的静态方法，Vue函数拥有的属性值

## Vue.extend()

全局定义组件
```js
Vue.component('xx',{
    // 选项
})
```
```js
var myFooter = {
    // 选项
    data() {
        return {
            name: '第一个组件'
        }
    },
    template: `
        <div>
            <p v-text="name"></p>
        </div>
    `
}
// 跟上面作用是等价的，但是含义不一样，一个是对象，一个是组件的选项
var myFooter = Vue.extend({
    // 选项
    data() {
        return {
            name: '第一个组件'
        }
    },
    template: `
        <div>
            <p v-text="name"></p>
        </div>
    `
})
// 选项放入一个自定义标签，并让它初始化
Vue.component('my-footer', myFooter)
```

## Vue.version

```js
new Vue({
    el: "#demo",
    data: {
        version: Vue.version
    },
    template: `
        <div>
            <p v-text="version"></p>
        </div>
    `
})
```

# Vue.nextTick

我们更新了M，V不是立即更新的，会有一定延时，需要局部`this.$nextTick`，全局监听`Vue.nextTick`去监听V层的变化
```js
changeValue() {
    // M层变动的时候，V不是立即更新
    // 更新M
    this.version = '1.2.0'
    // <p>2.6.10</p> <button>Ok</button>
    console.log(this.$el.innerHTML)
    this.$nextTick(function () {
        // 更新V
        // DOM 更新了
        console.log('DOM更新了')
        console.log(this.$el.innerHTML)
    })
}
```

# Vue.set( target, propertyName/index, value )

第一个参数，可以放对象或者数组，第二个是属性，第三个是属性值

```js
changeValue() {
    let obj = {
        name: 'yao',
        skill: ['ps', 'js', 'css']
    }
    console.log(obj)
    // 更新对象 只要是对象或者数组，都可以用这个方法来改对象
    Vue.set(obj, 'name', 'jing')
    console.log(obj)
}
```

# Vue.delete( target, propertyName/index )

```js
changeValue() {
    let obj = {
        name: 'yao',
        skill: ['ps', 'js', 'css']
    }
    console.log(obj)
    // 更新对象 只要是对象或者数组，都可以用这个方法来改对象
    // 删掉obj的name属性值
    Vue.delete(obj, 'name')
    console.log(obj)
}
```

# Vue.directive( id, [definition] )

自定义指令，指令，一般不需要自己去定义指令，内置指令一般是足够我们的使用了

内置指令，个人在项目里面不是建议使用

- v-model v-on
- v-if v-show v-for v-text

指令的本质是对同一个相似的DOM操作的封装，所有能用指令完成都会有其他方法来解决

```js
// 全局自定义指令 第一个指令的名字
Vue.directive('yao', (el, binding, vnode) => {
    // el就是指令绑定那个节点
    // binding就是传给指令的那个值
    el.style.color = binding.value
    console.log(el, binding, vnode)
    console.log('触发指令')
    // 这里将会被 `bind` 和 `update` 调用
})

Vue.directive('showw', (el, binding, vnode) => {
    // el就是指令绑定那个节点
    // binding就是传给指令的那个值
    el.style.display = binding.value ? 'block' : 'none'
    console.log(el, binding, vnode)
    console.log('触发指令')
    // 这里将会被 `bind` 和 `update` 调用
})
```

# Vue.filter( id, [definition] )

过滤器，把一个数据从旧状态变成新状态，computed计算属性

双花括号插值{{}}和 v-bind 表达式 (后者从 2.1.0+ 开始支持)

所有过滤器都可以用计算属性解决，过滤器局限性，因为只能用{{}}和 v-bind 
```js
// 货币过滤器
Vue.filter('currency', (value) => {
    // value接受传进来的数据，然后处理返回
    return `￥${value}`
})
new Vue({
    el: "#demo",
    data: {
        version: Vue.version
    },
    template: `
        <div>
            <p>{{version}}</p>
            <p>过滤器就是用|管道字符</p>
            <p>{{version|currency}}</p>
        </div>
    `
})
```
```html
<!-- 正确的写法 -->
<p>{{version|currency}}</p>
<!-- 错误的写法 -->
<p v-text="version|currency"></p>
```