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
可以使用 `v-on` 指令 (简写为 @) 来监听 DOM 事件，并在事件触发时执行对应的 JavaScript。用法：`v-on:click="handler" 或 @click="handler"`。
```vue
<script setup>
const name = ref('Vue.js')

function greet(event) {
  alert(`Hello ${name.value}!`)
  // `event` 是 DOM 原生事件
  if (event) {
    alert(event.target.tagName)
  }
}
</script>

<template>
<button @click="greet">Greet</button>
</template>
```

### 事件参数
有时我们需要在内联事件处理器中访问原生 DOM 事件。<br />
你可以向该处理器方法传入一个特殊的 `$event` 变量，或者使用内联箭头函数。
```html
<template>
<!-- 使用特殊的 $event 变量 -->
<button @click="warn('Form cannot be submitted yet.', $event)">
  Submit
</button>

<!-- 使用内联箭头函数 -->
<button @click="(event) => warn('Form cannot be submitted yet.', event)">
  Submit
</button>
</template>


<script setup>
function warn(message, event) {
  // 这里可以访问原生事件
  if (event) {
    // event为 PointerEvent 对象
    event.preventDefault()
  }
  alert(message)
}
<script>
```

### 事件修饰符
事件修饰符可以帮助我们少写一些代码，更专注与数据逻辑，而不是dom上的一些操作。
* .stop
* .prevent
* .self
* .capture
* .once
* .passive
修饰符的作用如下：
```html
<!-- 单击事件将停止传递 -->
<a @click.stop="doThis"></a>

<!-- 提交事件将不再重新加载页面 -->
<form @submit.prevent="onSubmit"></form>

<!-- 修饰语可以使用链式书写 -->
<a @click.stop.prevent="doThat"></a>

<!-- 也可以只有修饰符 -->
<form @submit.prevent></form>

<!-- 仅当 event.target 是元素本身时才会触发事件处理器 -->
<!-- 例如：事件处理器不来自子元素 等于不让事件向下传递 -->
<div @click.self="doThat">...</div>
```
> 使用修饰符时需要**注意调用顺序**，因为相关代码是以相同的顺序生成的。<br/>
> 因此使用 @click.prevent.self 会阻止元素及其子元素的所有点击事件的默认行为，<br/>
> 而 @click.self.prevent 则只会阻止对元素本身的点击事件的默认行为。

### 按键修饰符
* `.enter`修饰符只在按下键盘的 enter 按键后触发
```html
<!-- 仅在 `key` 为 `Enter` 时调用 `submit` -->
<input @keyup.enter="submit" />
```
* `..page-down`修饰符只在按下键盘的 pageDown 按键后触发
```html
<input @keyup.page-down="onPageDown" />
```
#### 常用按键修饰符
* .enter
* .tab
* .delete (捕获“Delete”和“Backspace”两个按键)
* .esc
* .space
* .up
* .down
* .left
* .right

#### 系统按键修饰符
* .ctrl
* .alt
* .shift
* .meta 

在 Mac 键盘上，meta 是 Command 键 (⌘)。在 Windows 键盘上，meta 键是 Windows 键 (⊞)

#### 按键组合使用
```html
<!-- Alt + Enter -->
<input @keyup.alt.enter="clear" />

<!-- Ctrl + 点击 -->
<div @click.ctrl="doSomething">Do something</div>
```

#### .exact 修饰符
`.exact`修饰符会控制按键的组合范围
```html
<!-- 当按下 Ctrl 时，即使同时按下 Alt 或 Shift 也会触发 -->
<button @click.ctrl="onClick">A</button>

<!-- 仅当按下 Ctrl 且未按任何其他键时才会触发 -->
<button @click.ctrl.exact="onCtrlClick">A</button>

<!-- 仅当没有按下任何系统按键时触发 -->
<button @click.exact="onClick">A</button>
```

### 鼠标按键修饰符
* .left **鼠标左键**
* .right **鼠标右键**
* .middle  **鼠标滚轮按下**

## 表单输入绑定
### 基本语法
使用`v-model`的指令进行表单值的双向绑定。<br/>
它可以作用于`input` `select` `radio` `checkbox` `textarea`等表单上。
```html
<p>Message is: {{ message }}</p>
<input v-model="message" placeholder="edit me" />
<textarea v-model="message" placeholder="add multiple lines"></textarea>
```

### 修饰符
#### .lazy
默认情况下`input`会在每次`input`事件更新后更新数据,<br/>
使用修饰符后，修改为 `change` 事件后更新数据。
```html
<input v-model.lazy="msg" />
```

#### .number
让用户输入自动转换为数字，你可以在` v-model `后添加 `.number` 修饰符<br/>
如果该值无法被 `parseFloat()` 处理，那么将返回原始值。
```html
<input v-model.number="age" />
```

#### .trim
可以自动去除用户输入内容中两端的空格，你可以在 `v-model` 后添加 `.trim` 修饰符<br>
在输入用户名等时候还是比较常用的。
```html
<input v-model.trim="msg" />
```

## 生命周期
### 常用生命周期
简单案例
```js
<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  console.log(`the component is now mounted.`)
})
</script>
```
#### vue3和vue2生命周期函数对应
| 执行时间 | Vue2.x的生命周期     | Vue3.x的生命周期    | 使用场景 |
| -------- | -------- | -------- | -------- |
| DOM挂在前 | beforeCreated | setup() | 接口调用执行/不操作DOM |
| DOM挂在前 | created | setup() | 接口调用执行/不操作DOM |
| 组件被挂载之前 | beforeMount | onBeforeMount | 更新 DOM 挂载之前的状态 |
| 组件挂载完成后 | mounted | onMounted | 获取/操作/挂载DOM |
| 组件即将因为响应式状态变更而更新其 DOM 树之前 | beforeUpdate | onBeforeUpdate | 用的不多 |
| 组件因为响应式状态变更而更新其 DOM 树之后 | updated | onUpdate | 可以用来检测信息是否更新 |
| 在组件实例被卸载之前 | beforeDestroy | onBeforeUnmount | 用的不多 |
| 组件被挂载之前 | destroyed | onUnmounted | 清理一些副作用，例如计时器、DOM 事件监听器或者与服务器的连接 |
| 捕获了后代组件传递的错误时 | errorCaptured | onErrorCaptured | 捕获子组件错误时使用 |


#### onMounted()
注册一个回调函数，**在组件挂载完成后**执行。<br/>
当需要操作dom或者挂在dom的时候，方法可以在这个钩子中执行。

#### onUpdated()
注册一个回调函数，**在组件因为响应式状态变更而更新其 DOM 树之后**调用 <br/>
**注意:** 不要在 updated 钩子中更改组件的状态，这可能会导致无限的更新循环！

#### onUnmounted()
注册一个回调函数，**在组件实例被卸载之后**调用。<br/>
可以在这个钩子中手动清理一些副作用，例如计时器、DOM 事件监听器或者与服务器的连接。

#### onBeforeMount()
注册一个钩子，**在组件被挂载之前被调用**。<br/>
此时，组件已经完成了其响应式状态的设置，但还没有创建 DOM 节点。它即将首次执行 DOM 渲染过程。

#### onBeforeUpdate()
**在组件即将因为响应式状态变更而更新其 DOM 树之前**调用。<br>
这个钩子可以用来在 Vue 更新 DOM 之前访问 DOM 状态。

#### onBeforeUnmount()
**在组件实例被卸载之前**调用。<br/>
当这个钩子被调用时，组件实例依然还保有全部的功能。

### 不常用的钩子函数
#### onErrorCaptured()
在**捕获了后代组件传递的错误时**调用

#### onRenderTracked()
当组件渲染过程中**追踪到响应式依赖时**调用<br/>
这个钩子仅在开发模式下可用，且在服务器端渲染期间不会被调用。

#### onRenderTriggered() 
当**响应式依赖的变更触发了组件渲染时**调用<br/>
这个钩子仅在开发模式下可用，且在服务器端渲染期间不会被调用。

#### onActivated()
注册一个回调函数，若组件实例是 `<KeepAlive>` 缓存树的一部分，当组件被插入到 DOM 中时调用。

#### onDeactivated()
若组件实例是 `<KeepAlive>` 缓存树的一部分，当组件从 DOM 中被移除时调用。

#### onServerPrefetch()
注册一个异步函数，在组件实例在服务器上被渲染之前调用。<br/>
这个钩子仅会在服务端渲染中执行，可以用于执行一些仅存在于服务端的数据抓取过程。

## 侦听器
在组合式 API 中，我们可以使用 `watch` 函数在每次响应式状态发生变化时触发回调函数。<br/>
### 基本案例
```html
<script setup>
import { ref, watch } from 'vue'

const question = ref('')
const answer = ref('Questions usually contain a question mark. ;-)')

// 可以直接侦听一个 ref
watch(question, async (newQuestion, oldQuestion) => {
  if (newQuestion.indexOf('?') > -1) {
    answer.value = 'Thinking...'
    try {
      const res = await fetch('https://yesno.wtf/api')
      answer.value = (await res.json()).answer
    } catch (error) {
      answer.value = 'Error! Could not reach the API. ' + error
    }
  }
})
</script>

<template>
  <p>
    Ask a yes/no question:
    <input v-model="question" />
  </p>
  <p>{{ answer }}</p>
</template>
```

#### 侦听数据类型
`watch` 的第一个参数可以是不同形式的“数据源”：<br/>
* 它可以是一个 ref (包括计算属性)、
* 一个响应式对象、
* 一个 getter 函数 
* 多个数据源组成的数组
```js
const x = ref(0)
const y = ref(0)

// 单个 ref
watch(x, (newX) => {
  console.log(`x is ${newX}`)
})

// getter 函数
watch(
  () => x.value + y.value,
  (sum) => {
    console.log(`sum of x + y is: ${sum}`)
  }
)

// 多个来源组成的数组
watch([x, () => y.value], ([newX, newY]) => {
  console.log(`x is ${newX} and y is ${newY}`)
})
```
**注意：** 不能直接使用watch监听响应式对象的属性值。
```js
const obj = reactive({ count: 0 })

// 错误，因为 watch() 得到的参数变成了 number
watch(obj.count, (count) => {
  console.log(`count is: ${count}`)
})
```

### 深层侦听器
如果直接给**watch**传入一个响应式对象，会创建一个深层的侦听器，这个对象的任意一处变更时，监听都会被触发。
```js
const obj = reactive({ count: 0 })

watch(obj, (newValue, oldValue) => {
  // 在嵌套的属性变更时触发
  // 注意：`newValue` 此处和 `oldValue` 是相等的
  // 因为它们是同一个对象！
})

obj.count++
```
也可以通过**deep**选项，强制转化成深层监听。
```js
watch(
  // 这种参数的写法用于监听对象中具体属性的变化
  () => state.someObject,
  (newValue, oldValue) => {
    // 注意：`newValue` 此处和 `oldValue` 是相等的
    // *除非* state.someObject 被整个替换了
  },
  { deep: true }
)
```
> 深层监听在作用于数据量较大的数据时候，性能开销较大，需谨慎使用。

### 即时回调侦听器
`watch` 默认是懒执行的：仅当数据源变化时，才会执行回调。但在某些场景中，我们希望在创建侦听器时，立即执行一遍回调。<br/>
可以通过传入 `immediate: true `选项来强制侦听器的回调立即执行
```js
watch(source, (newValue, oldValue) => {
  // 立即执行，且当 `source` 改变时再次执行
}, { immediate: true })
```

### watchEffect()
它会监听引用数据类型的所有属性，不需要具体到某个属性，一旦运行就会立即监听，组件卸载的时候会停止监听
#### 基本使用
```html
<template>
  <div>
    <input type="text" v-model="obj.name"> 
  </div>
</template>

<script>
import { reactive, watchEffect } from 'vue';
export default {
  setup(){
    let obj = reactive({
      name:'zs'
    });
    watchEffect(() => {
      console.log('name:',obj.name)
    })

    return {
      obj
    }
  }
}
</script>

```
### watch vs watchEffect
* **watch** 只追踪明确侦听的数据源，仅在数据源确实改变时才会触发回调。
* **watchEffect** 自动追踪所有能访问到的响应式属性。这更方便。

### 停止侦听器
在setup中创建侦听器后，会自动绑定到组件实例上，并且会在组件卸载时自动停止。<br/>
因此大多数情况下，不用担心如何去停止它。

一个关键点是，侦听器**必须用同步语句创建**,如果用异步回调创建一个侦听器，<br/>
那么它不会绑定到当前组件上，你必须手动停止它，以防内存泄漏。
#### 异步创建侦听器
```js
<script setup>
import { watchEffect } from 'vue'

// 它会自动停止
watchEffect(() => {})

// ...这个则不会！
setTimeout(() => {
  watchEffect(() => {})
}, 100)
</script>
```
要手动停止一个侦听器，需要调用 `watch` 或 `watchEffect` 返回的函数
```js
const unwatch = watchEffect(() => {})

// ...当该侦听器不再需要时
unwatch()
```

## 模版引用
### ref的基本使用
使用`ref`进行底层dom元素的访问。<br/>
**注意：** 只能在组件被挂在后才能使用ref进行访问。
```html
<script setup>
import { ref, onMounted } from 'vue'

// 声明一个 ref 来存放该元素的引用
// 必须和模板里的 ref 同名
const input = ref(null)

onMounted(() => {
  // 这里通过 input.value 访问到了input这个dom元素
  input.value.focus()
})
</script>

<template>
  <input ref="input" />
</template>
```

### 组件上的 ref
模板引用也可以被用在一个子组件上。这种情况下引用中获得的值是组件实例<br/>
```html
<script setup>
import { ref, onMounted } from 'vue'
import Child from './Child.vue'

const child = ref(null)

onMounted(() => {
  // child.value 是 <Child /> 组件的实例
})
</script>

<template>
  <Child ref="child" />
</template>
```

## 组件基础
### 定义一个组件
定义一个组件，其实就是创建一个vue文件。
```html
<script setup>
import { ref } from 'vue'

const count = ref(0)
</script>

<template>
  <button @click="count++">You clicked me {{ count }} times.</button>
</template>
```

### 使用组件
要使用一个子组件，我们需要在父组件中导入它<br/>
1. 首先在script中导入子组件 <br/>
2. 在template中直接引入使用即可
```html
<script setup>
import ButtonCounter from './ButtonCounter.vue'
</script>

<template>
  <h1>Here is a child component!</h1>
  <ButtonCounter />
</template>
```

### 父传子 传递props
`defineProps` 是一个仅 `<script setup>` 中可用的编译宏命令，并不需要显式地导入。声明的 `props` 会自动暴露给模板。<br/>
**父组件中**
```html
<script>
  import {ref} from 'vue'
  import dataBox from '@/components/customTable.vue'
  let test = ref('test');
</script>

<template>
<dataBox :title="test" /> 
</template>
```
**子组件中**
```html
<script setup>
defineProps(['title'])
</script>

<template>
  <h4>{{ title }}</h4>
</template>
```
如果不使用`setup`语法糖的情况下，必须用`props`选项的形式声明
```js
export default {
  props: ['title'],
  setup(props) {
    console.log(props.title)
  }
}
```

### 子传父 $emit
在`setup`语法糖中 我们可以通过 `defineEmits` 宏来声明需要抛出的事件
**父组件中**
```html
<script>
  import {ref} from 'vue'
  import dataBox from '@/components/customTable.vue'
  let test = ref(1);
  let changeResult = () =>{
    test.value++
  }
</script>

<template>
<dataBox :title="test" @changeData="changeResult" /> 
</template>
```
**子组件中**
```html
<script setup>
defineProps(['title']);
const emit = defineEmits(['change']);
let change = () =>{
  emit('changeData');
}
</script>

<template>
  <h4 @click="change">{{ title }}</h4>
</template>
```
如果不使用`setup`语法糖的情况下，必须用`props`选项的形式声明
```js
export default {
  props: ['title'],
  setup(props) {
    console.log(props.title)
  }
}
```
如果你没有在使用 `<script setup>`，你可以通过 emits 选项定义组件会抛出的事件。<br/>
可以从 `setup()` 函数的第二个参数，即 setup 上下文对象上访问到 emit 函数
```js
export default {
  emits: ['changeData'],
  setup(props, ctx) {
    ctx.emit('enlarge-text')
  }
}
```

### 动态组件
当需要几个组件来回切换的时候，比如tab选项，就可以使用动态组件。<br/>
通过修改 `is`的值来不断的切换需要渲染的组件。
```html
<script setup>
import Home from './Home.vue'
import Posts from './Posts.vue'
import Archive from './Archive.vue'
import { ref } from 'vue'
 
const currentTab = ref('Home')

const tabs = {
  Home,
  Posts,
  Archive
}
</script>

<template>
  <div class="demo">
    <button
       v-for="(_, tab) in tabs"
       :key="tab"
       :class="['tab-button', { active: currentTab === tab }]"
       @click="currentTab = tab"
     >
      {{ tab }}
    </button>
	  <component :is="tabs[currentTab]" class="tab"></component>
  </div>
</template>
```

当使用 `<component :is="...">` 来在多个组件间作切换时，被切换掉的组件会被卸载。<br/>
可以通过 `<KeepAlive>` 组件强制被切换掉的组件仍然保持“存活”的状态。



 





