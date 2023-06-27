# 基础
## 模板语法
### 文本插值
最基本的数据绑定形式是文本插值，它使用的是“Mustache”语法 (即双大括号)<br />
```html
<span>Message: {{ msg }}</span>
```
双大括号标签会被替换为相应组件实例中 msg 属性的值。同时每次 msg 属性更改时它也会同步更新。<br/>
这是响应式的。<br/>
也可以直接在`{{ }}`中写表达式。
```html
<span>Message: {{ msg + 1 }}</span>
```

### 动态属性
使用v-bind属性进行动态绑定属性的值。
```html
<div v-bind:id="id"></div>

<!-- 简写 -->
<div :id="id"></div>
<!-- 也可以写表达式 -->
<div :id="id+1"></div>
<!-- 三元表达式输出值 -->
<div :id="flag?'on':''"></div>
<!-- 也可以在里面调用函数 -->
<time :title="toTitleDate(date)" :datetime="date">
  {{ formatDate(date) }}
</time>
```

### 指令
指令是带有 `v-` 前缀的特殊属性。<br />
例如：`v-once` `v-html` `v-if` <br />
指令里面是一个js的表达式，在它的值发生变化时，响应式的去更新DOM界面。


### 参数
`v-bind`指令可以响应式的更新参数。<br/>
```html
<span v--bind:class="name"></span>
<!-- 语法糖 简写 -->
<span :class="name"></span>
```
`v-on`指令可以用来监听DOM事件。<br/>
监听`changeName`事件
```html
<span v--on:click="changeName"></span>
<!-- 语法糖 简写 效果是一样的-->
<span @click="changeName"></span>
```
#### 动态参数
参数名使用小写，大写会被转化成小写。<br/>
在 **data** 中或者使用 vue3 语法传入`someattr`和`value` 的值可以动态修改参数的名字和值。
```html
<!-- 这里会被转化成 someattr -->
<a :[someAttr]="value"> ... </a>

<!-- 转化后 -->
<a :[someattr]="value"> ... </a>
```

### 修饰符 Modifiers
修饰符是以点开头的特殊后缀。<br />
`.prevent`修饰符其实是调用了`event.preventDefault()`方法。<br />
用来阻止浏览器的默认事件，使用更加方便。
```html
<form @submit.prevent="onSubmit">...</form>
```

## 响应式基础
### 声明响应式状态
#### reactive
我们可以使用 `reactive()` 函数创建一个响应式对象或数组。
```js
import { reactive } from 'vue'

const state = reactive({ count: 0 })
```
如果要在 vue 文件中使用响应式状态，需要在`setup`函数中定义，并且返回。<br/>
**vue3.2** 以后的版本中，引入了 `setup` 语法糖，可以更加简单的使用这些功能。
```html
<div>{{ state.count }}</div>
<button @click="increment">
  {{ state.count }}
</button>
```
方法和变量都可以返回出来在html模版中被使用。
```js
import { reactive } from 'vue'

export default {
  setup() {
    const state = reactive({ count: 0 })

    function increment() {
      state.count++
    }

    // 不要忘记同时暴露 increment 函数
    return {
      state,
      increment
    }
  }
}
```
#### reactive的局限性
`reactive()`API的限制<br />
* 1.响应式：仅对对象类型有效（对象、数组和 Map、Set 这样的集合类型），而对 string、number 和 boolean 这样的 原始类型 无效。
* 2.进行 reactive 声明后，不能随意替换对象，会导致响应式链接的丢失。
下面这种原始数据类型要使用 `ref` 的方式进行声明。<br/>
使用 `reactive` 没有响应式 双向绑定的效果。
```js
let state = reactive({ count: 0 })
// 上面的引用 ({ count: 0 }) 将不再被追踪（响应性连接已丢失！）
state = reactive({ count: 1 })

// 这种写法也是错误的，重新赋值给test会丢失响应链接
let test = state.count;
```
当我们将响应式对象的**属性赋值或解构至本地变量**时，或是将该属性传入一个函数时，会失去响应性。

#### ref定义变量
`ref()` 将传入参数的值包装为一个带 `.value` 属性的 **ref 对象**
```js
import { ref } from 'vue'

const count = ref(0)

console.log(count) // { value: 0 }
console.log(count.value) // 0

count.value++
console.log(count.value) // 1
```
和响应式对象的属性类似，`ref` 的 `.value` 属性也是响应式的。<br/>
同时，当值为对象类型时，会用 `reactive()` 自动转换它的 `.value`。<br/>
`ref`被传递给函数或者被解构时，不会丢失响应链接。
```js
const objectRef = ref({ count: 0 })

// 这是响应式的替换
objectRef.value = { count: 1 }
```

#### ref在模版中的解包
在 **template** 中不需要 `.value` 就可以直接访问到值。<br/>
当` ref `被嵌套在深层的响应式对象中时，也会进行解包。
```vue
<script setup>
import { ref } from 'vue'

const count = ref(0)

function increment() {
  count.value++
}
</script>

<template>
  <button @click="increment">
    {{ count }} <!-- 无需 .value -->
  </button>
</template>
```


### setup语法糖
使用 **setup** 语法糖可以简化在setup函数中的工作。
* 在**script**标签中添加 `setup` 标识
* 变量和方法可以直接使用，不需要另外返回
```vue
<script setup>
import { reactive } from 'vue'

const state = reactive({ count: 0 })

function increment() {
  state.count++
}
</script>

<template>
  <button @click="increment">
    {{ state.count }}
  </button>
</template>
```

### nextTick
使用`nextTick`函数可以确保dom加载完毕后进行执行。<br />
它和vue2中的`this.$nextTick`效果是一样的。
```js
import { nextTick } from 'vue'

function increment() {
  state.count++
  nextTick(() => {
    // 访问更新后的 DOM
  })
}
```

### 深层响应
在 Vue 中，状态都是默认深层响应式的。这意味着即使在更改深层次的对象或数组，你的改动也能被检测到。
```js
import { reactive } from 'vue'

const obj = reactive({
  nested: { count: 0 },
  arr: ['foo', 'bar']
})

function mutateDeeply() {
  // 以下都会按照期望工作
  obj.nested.count++
  obj.arr.push('baz')
}
```

## 计算属性
当模板中的运算比较复杂时，可以使用计算属性来描述依赖响应式状态的复杂逻辑。<br />
* 当不使用计算属性时
```html
<template>
  <p class="test">{{ kolento.money>100?'rich':'poor' }}</p>
</template>

<script setup>
  import {reactive} from 'vue';
  const kolento = reactive({
    money:101
  })
<script>
```


* 使用计算属性 <br/>
可以使得模版中更加简洁。
```html
<template>
  <p>{{ hasMoney }}</p>
</template>

<script setup>
import { reactive, computed } from 'vue'

  const kolento = reactive({
    money:101
  })

  const hasMoney = computed(() => {
    return kolento.money > 100 ? 'rich' : 'poor'
  })
</script>
```

### 计算属性缓存vs方法
#### 区别

* 计算属性和直接在模板（双大括号）中调用方法得到的结果是一样的。
* 但是计算属性的执行是依赖与 响应式值 的变化来执行的，不像方法会被每次执行。
* 在被依赖的响应式值变化前，一直是使用之前的缓存。

#### 可写计算属性
计算属性默认是只读的，但是可以通过计算属性中添加`getter`和`setter`来创建修改计算属性。

## 类与样式的绑定
### class的绑定
#### 绑定对象
通过`isActive`的值来决定是否存在 **class active**

```vue
<template>
<div :class="{ active: isActive }"></div>
</template>

<script>
  const isActive = ref(true)
</script>
```

#### 绑定数组
```js
const activeClass = ref('active')
const errorClass = ref('text-danger')
```
```html
<div :class="[activeClass, errorClass]"></div>
```
得出最后被渲染的结果
```html
<div class="active text-danger"></div>
```
也可以使用三元表达式渲染class的值
```html
<div :class="[isActive ? activeClass : '', errorClass]"></div>
```

### 绑定内联样式
#### 绑定对象
使用`:style`进行绑定,可以把样式的值渲染上去修改节点的样式。<br />
`:style`推荐使用驼峰的书写形式，同时也支持使用 **-** 的形式。
```vue
<script>
const activeColor = ref('red')
const fontSize = ref(30)
</script>

<template>
<div :style="{ color: activeColor, fontSize: fontSize + 'px' }"></div>
<div :style="{ 'font-size': fontSize + 'px' }"></div>
</template>
```
也可以直接绑定一个样式对象，这样模版中的语法会更加简洁，这一点有点像React。
```js
const styleObject = reactive({
  color: 'red',
  fontSize: '13px'
})
```
```html
<div :style="styleObject"></div>
```

#### 绑定数组
可以给 `:style` 绑定一个包含多个样式对象的数组。这些对象会被合并后渲染到同一元素上。
```html
<div :style="[baseStyles, overridingStyles]"></div>
```

#### 自动前缀
在 `:style `中使用了需要浏览器特殊前缀的 CSS 属性时，Vue 会自动为他们加上相应的前缀。Vue 是在运行时检查该属性是否支持在当前浏览器中使用。如果浏览器不支持某个属性，那么将尝试加上各个浏览器特殊前缀。

## 条件渲染
### v-if
`v-if` 指令用于条件性地渲染一块内容。这块内容只会在指令的表达式返回真值时才被渲染。 <br/>
当返回的值为 false 时，节点将不会被渲染。
```html
<h1 v-if="awesome">Vue is awesome!</h1>
```
### v-else
可以使用 `v-else` 为 `v-if` 添加一个“else 区块”<br/>
一个 `v-els`e 元素必须跟在一个 `v-if` 或者 `v-else-if` 元素后面，否则它将不会被识别
```html
<h1 v-if="happy">a happy day</h1>
<h1 v-else>not happy</h1>
```
### v-else-if
`v-else-if` 提供的是相应于 `v-if` 的“else if 区块”。它可以连续多次重复使用
```html
<div v-if="type === 'A'">
  A
</div>
<div v-else-if="type === 'B'">
  B
</div>
<div v-else-if="type === 'C'">
  C
</div>
<div v-else>
  Not A/B/C
</div>
```

### v-show
`v-show`可以通过返回的值来决定元素是否显示，这里的显示是通过样式(`display:none`)控制的
```html
<h1 v-show="ok">Hello!</h1>
```

#### v-show 和 v-if 的区别
* `v-if` 是“真实的”按条件渲染，因为它确保了在切换时，条件区块内的事件监听器和子组件都会被销毁与重建。

* `v-if` 也是惰性的：如果在初次渲染时条件值为 false，则不会做任何事。条件区块只有当条件首次变为 true 时才被渲染。

* 相比之下，`v-show` 简单许多，元素无论初始条件如何，始终会被渲染，只有 CSS display 属性会被切换。

* 总的来说，`v-if `有更高的切换开销，而 `v-show` 有更高的初始渲染开销。因此，如果需要频繁切换，则使用 `v-show` 较好；如果在运行时绑定条件很少改变，则 `v-if` 会更合适。

### v-if 和 v-for
> 当 v-if 和 v-for 同时存在于一个元素上的时候，v-if 会首先被执行。请查看列表渲染指南获取更多细节。<br />
> 同时使用 v-if 和 v-for 是不推荐的，因为这样二者的优先级不明显。

### v-for列表渲染
`v-for`可以用来渲染一个列表。
* item 当前数组循环的列表项
* index 当前数组循环列表项对应的索引index
```vue
<script>
const parentMessage = ref('Parent')
const items = ref([{ message: 'Foo' }, { message: 'Bar' }])
</script>

<template>
<li v-for="(item, index) in items">
  {{ parentMessage }} - {{ index }} - {{ item.message }}
</li>
</template>

```
返回内容：<br/> 
Parent - 0 - Foo<br/>
Parent - 1 - Bar<br/> 
使用 **of** 作为分隔符来替代 **in**
```html
<div v-for="item of items"></div>
```

#### v-for 与对象
可以使用 `v-for` 来遍历一个对象的所有属性。
```vue
<script>
const myObject = reactive({
  title: 'How to do lists in Vue',
  author: 'Jane Doe',
  publishedAt: '2016-04-10'
})
</script>

<template>
<ul>
  <li v-for="value in myObject">
    {{ value }}
  </li>
</ul>
</template>

```
可以通过提供第二个参数表示属性名 (例如 key)
```html
<li v-for="(value, key) in myObject">
  {{ key }}: {{ value }}
</li>
```
第三个参数表示位置索引
```html
<li v-for="(value, key, index) in myObject">
  {{ index }}. {{ key }}: {{ value }}
</li>

<!-- 返回如下 -->
0. title: How to do lists in Vue
1. author: Jane Doe
2. publishedAt: 2016-04-10
```

#### 在 v-for 里使用范围值
`v-for` 可以直接接受一个整数值。
```html
<span v-for="n in 10">{{ n }}</span>
```

#### 通过key管理状态
在使用`v-for`进行列表循环时，需要为每个元素对应的块提供一个唯一的 `key`
```html
<div v-for="item in items" :key="item.id">
  <!-- 内容 -->
</div>
```

## 事件处理






