# 深入组件
## 组件注册
### 全局注册
可以使用 `Vue` 应用实例的 `app.component()` 方法，让组件在当前 `Vue` 应用中全局可用<br/>
只是这种全局注册的使用方法，平时几乎用不到。
```js
import { createApp } from 'vue'

const app = createApp({})

app.component(
  // 注册的名字
  'MyComponent',
  // 组件的实现
  {
    /* ... */
  }
)
```

### 局部注册
* 在使用 `<script setup>` 的单文件组件中，导入的组件可以直接在模板中使用，无需注册
```html
<script setup>
import ComponentA from './ComponentA.vue'
</script>

<template>
  <ComponentA />
</template>
```
* 如果没有使用 `<script setup>`，则需要使用 `components` 选项来显式注册
```js
import ComponentA from './ComponentA.js'

export default {
  components: {
    ComponentA
  },
  setup() {
    // ...
  }
}
```
### 组件名格式
推荐使用驼峰的命名方式。`<PascalCase />`<br/>
Vue 支持将模板中使用 kebab-case 的标签解析为使用 PascalCase 注册的组件。这意味着一个以 MyComponent 为名注册的组件，在模板中可以通过 `<MyComponent>` 或 `<my-component>` 引用

## props声明
#### 基本使用
在子组件接收父组件的数据时，需要声明一个`props`来进行接收<br/>
在使用 `<script setup>` 的单文件组件中，`props` 可以使用 `defineProps()` 宏来声明
```vue
<script setup>
const props = defineProps(['foo'])
console.log(props.foo)
</script>
```
在没有使用 `<script setup>` 的组件中，prop 可以使用 `props` 选项来声明
```js
export default {
  props: ['foo'],
  setup(props) {
    // setup() 接收 props 作为第一个参数
    console.log(props.foo)
  }
}
```

#### 对象声明方式
除了使用字符串数组来声明 prop 外，还可以使用对象的形式,可以选定一个默认的数据类型。
```js
// 使用 <script setup>
defineProps({
  title: String,
  likes: Number
})
js
// 非 <script setup>
export default {
  props: {
    title: String,
    likes: Number
  }
}
```

### 单项数据流
所有的 props 都遵循着**单向绑定原则**，props 因父组件的更新而变化，自然地将新的状态向下流往子组件，而不会逆向传递。

## 组件事件
### $emit
在组件的模板表达式中，可以直接使用 `$emit` 方法触发自定义事件
```html
<!-- 子组件 MyComponent -->
<button @click="$emit('someEvent')">click me</button>
```
父组件可以通过` v-on (缩写为 @) `来监听事件
```html
<!-- 父组件 -->
<MyComponent @some-event="callback" />
```
组件的事件监听器也支持 `.once`等 事件修饰符
```html
<MyComponent @some-event.once="callback" />
```
**和原生 DOM 事件不一样，组件触发的事件没有冒泡机制。**

### 事件参数
可以通过在`$emit`方法中进行传参<br/>
* 第一个参数是父组件监听的方法
* 后面所有的参数都是按顺序传递的数据
```html
<button @click="$emit('increaseBy', 1)">
  Increase by 1
</button>
```
> 所有传入 $emit() 的额外参数都会被直接传向监听器。举例来说，$emit('foo', 1, 2, 3) 触发后，监听器函数将会收到这三个参数值。

### 声明触发的事件
#### 基本使用
组件可以显式地通过 `defineEmits()` 宏来声明它要触发的事件
```js
<script setup>
defineEmits(['inFocus', 'submit'])
</script>
```
* `$emit`不能在`setup`语法糖中使用
* `setup`语法糖中推荐使用`defineEmits()`
```vue
<script setup>
const emit = defineEmits(['inFocus', 'submit'])

function buttonClick() {
  emit('submit')
}
</script>
```

#### 对象语法
`emits` 选项还支持对象语法，它允许我们对触发事件的参数进行验证
```vue
<script setup>
const emit = defineEmits({
  submit(payload) {
    // 通过返回值为 `true` 还是为 `false` 来判断
    // 验证是否通过
  }
})
</script>
```

#### 其他用法
在不实用`setup`语法糖时，emit应该被这样使用
```js
export default {
  emits: ['inFocus', 'submit'],
  setup(props, ctx) {
    ctx.emit('submit')
  }
}
```

## 组件 v-model
`v-model` 可以在组件上使用以实现双向绑定
1. **展示：**父组件`v-model`,子组件接受一个`props`值`value`,将它展示到子组件自己的`input``上。
2. **改变：**当子组件自身发生改变时，触发自身的`input`方法，然后触发父组件的事件方法，改变父组件的`vaule`,进而改变接受的`props`,实现自身展示的改变
### v-model与v-bind的区别
1. `v-model`是双向绑定数据，也就是当父组件传进去的数据发生改变时，子组件的数据也会发生改变，当子组件发生改变时，父组件也会发生改变，
`v-bind`是单向绑定，当父组件的数据发生改变时，子组件的数据也会发生改变，但是当子组件发生改变时，父组件的数据不会发生改变
2. `v-model`默认绑定`value`值,`v-bind`的绑定值是可以自定义的，
所以自定义组件通过`v-model`绑定的第一个就是value`值，第二是子组件里面的数据发生改变之后通知父组件也做出相应的改变，以实现双向数据绑定。

## Attributes 继承
当组件接收一个属性和值，但是并不是以props的形式接收，就会被视作 `透传 attribute`，自动透传到了 `<MyButton>` 的根元素上。<br/>
最常见的就是 `style` `class` `id` 这一类。

### class 和 style 的合并
如果一个子组件的根元素已经有了 `class` 或 `style` attribute，它会和从父组件上继承的值合并。
```html
<!-- 父组件 -->
<Child class="test" />

<!-- 子组件 -->
<p class="hello">hello</p>

<!-- 最后渲染出来的节点 -->
<p class="hello test">hello</p>
```

### v-on 监听器继承
当在子组件上添加事件时，这个事件也会被继承到子组件的根节点上。
```html
<!-- 父组件 -->
<Child @click="onClick" />

<!-- 子组件 -->
<p class="hello" @click="onClick">hello</p>
```

### 禁用 Attributes 继承
如果不想要一个组件自动地继承 `attribute`，你可以在组件选项中设置 `inheritAttrs: false`<br/>
如果你使用了 `<script setup>`，你需要一个额外的 `<script>` 块来书写这个选项声明,这挺不方便的。
```js
<script>
// 使用普通的 <script> 来声明选项
export default {
  inheritAttrs: false
}
</script>

<script setup>
// ...setup 部分逻辑
</script>
```
从 Vue3.3 开始也可以直接在 `<script setup>` 中使用 `defineOptions`
```vue
<script setup>
defineOptions({
  inheritAttrs: false
})
// ...setup 逻辑
</script>
```

### 多根节点的 Attributes 继承
因为现在vue3支持多个根节点了。<br/>
和单根节点组件有所不同，有着多个根节点的组件没有自动 attribute 透传行为,因为Vue不知道要渲染到哪一个节点上。

### useAttrs
可以在 `<script setup>` 中使用 `useAttrs()` API 来访问一个组件的所有透传属性<br/>
作用和props差不多，但是有所不同，也是能在子组件上接收来自父组件的值。<br/>
**实用场景：**对公共组件进行再封装低频属性,实际上平时基本使用不到。
```vue
<script setup>
import { useAttrs } from 'vue'

const attrs = useAttrs()
</script>
```
如果没有使用 `<script setup>`，attrs 会作为` setup()` 上下文对象的一个属性暴露
```js
export default {
  setup(props, ctx) {
    // 透传 attribute 被暴露为 ctx.attrs
    console.log(ctx.attrs)
  }
}
```
* 需要注意的是，虽然这里的 `attrs` 对象总是反映为最新的透传 `attribute`，但它并不是响应式的 (考虑到性能因素)。
* 你不能通过侦听器去监听它的变化。如果你需要响应性，可以使用 `prop`
* 当我已经使用`props`来接收父组件值的时候，`useAttrs()`将拿不到值。

## 插槽 Slots
### 基本使用
插槽可以让组件接收一些 html片段模板 然后在子组件中渲染这些内容。<br/>
在子组件标签中输入的内容，都会通过 `slot` 标签渲染在子组件指定的位置。
```html
<!-- 父组件 -->
<FancyButton>
  Click me! <!-- 插槽内容 -->
</FancyButton>

<!-- 子组件 -->
<button class="fancy-btn">
  <slot></slot> <!-- 插槽出口 -->
</button>

<!-- 最终子组件的渲染结果 -->
<button class="fancy-btn">Click me!</button>
```
`<slot> `元素是一个插槽出口 (slot outlet)，标示了父元素提供的插槽内容 (slot content) 将在哪里被渲染

**插槽内容可以是任意合法的模板内容**，不局限于文本。例如我们可以传入多个元素，甚至是组件
```html
<FancyButton>
  <span style="color:red">Click me!</span>
  <AwesomeIcon name="plus" />
</FancyButton>
```
### 渲染作用域
插槽内容可以访问到父组件的数据作用域，因为插槽内容本身是在父组件模板中定义的。<br/>
插槽内容无法访问子组件的数据。因为实际上它来自父组件。

### 默认内容
在 `<slot> 标签`之间添加信息可以用来作为默认内容<br/>
这个默认内容只在父组件没有定义插槽内的内容时会生效。
```html
<!-- 子组件 -->
<button type="submit">
  <slot>
    Submit <!-- 默认内容 -->
  </slot>
</button>

<!-- 父组件 -->
<SubmitButton />

<!-- 最后渲染为 -->
<button type="submit">Submit</button>

<!-- 如果填写了插槽内容 -->
<SubmitButton>Save</SubmitButton>

<!-- 填写的内容会覆盖默认内容 -->
<button type="submit">Save</button>
```

### 具名插槽
`<slot> 元素`可以有一个特殊的属性 `name`，用来给各个插槽分配唯一的 ID，以确定每一处要渲染的内容的位置。<br/>
这类带 name 的插槽被称为具名插槽
```html
<div class="container">
  <header>
    <slot name="header"></slot>
  </header>
  <main>
    <slot></slot>
  </main>
  <footer>
    <slot name="footer"></slot>
  </footer>
</div>
```
要为具名插槽传入内容，我们需要使用一个含 `v-slot 指令的 <template> 元素`，并将目标插槽的名字传给该指令
```html
<!-- 这样template的内容就会根据 header 传到指定name的插槽中显示了 -->
<Test>
  <template v-slot:header>
    <!-- header 插槽的内容放这里 -->
  </template>
</Test>
```
`v-slot` 有对应的简写 `#`，因此 `<template v-slot:header>` 可以简写为 `<template #header>`

### 动态插槽名
动态指令参数在 `v-slot` 上也是有效的，即可以定义下面这样的动态插槽名<br/>
通过修改`dynamicSlotName`的值 更改插槽的名字。
```html
<base-layout>
  <template v-slot:[dynamicSlotName]>
    ...
  </template>

  <!-- 缩写为 -->
  <template #[dynamicSlotName]>
    ...
  </template>
</base-layout>
```

### 作用域插槽
一般情况下，插槽的内容无法访问到子组件的内容。<br/>
但是有的时候需要我们这么做，可以像对组件传递 props 那样，向一个插槽的出口上传递一个属性和值。
```html
<!-- <MyComponent> 的模板 -->
<div>
  <slot :text="greetingMessage" :count="1"></slot>
</div>
```
当需要接收插槽 props 时，默认插槽和具名插槽的使用方式有一些小区别。<br/>
#### 默认插槽对子组件进行传值
* 通过子组件标签上的 `v-slot` 指令,传递一个对象`slotProps`到子组件中。
* **作用：**可以在父组件中传参来显示子组件绑定的数据
```html
<MyComponent v-slot="slotProps">
  {{ slotProps.text }} {{ slotProps.count }}
</MyComponent>
```

### 具名作用域插槽
具名作用域插槽的工作方式也是类似的，插槽 `props` 可以作为 `v-slot` 指令的值被访问到：`v-slot:name="slotProps"`。当使用缩写时是这样：
```html
<MyComponent>
  <template #header="headerProps">
    {{ headerProps }}
  </template>

  <template #default="defaultProps">
    {{ defaultProps }}
  </template>

  <template #footer="footerProps">
    {{ footerProps }}
  </template>
</MyComponent>
```

## 依赖注入
### Prop 逐级透传
指的是当父组件传值给子组件的时候，一般使用props传递，但是当层级较多时，会比较麻烦。<br/>
可以使用 `provide` 和 `inject`

### Provide (提供)
要为组件后代提供数据，需要使用到 `provide()` 函数<br/>
`provide()` 函数接收两个参数。第一个参数被称为注入名
* 后代组件会用注入名来查找期望注入的值。
* 一个组件可以多次调用 `provide()`，使用不同的注入名，注入不同的依赖值。
* 第二个参数是提供的值，值可以是任意类型，包括响应式的状态，比如一个 `ref`
```vue
<script setup>
import { provide } from 'vue'

provide(/* 注入名 */ 'message', /* 值 */ 'hello!')
</script>
```
如果不使用 `<script setup>`，请确保 `provide()` 是在 `setup()` 同步调用的
```js
import { provide } from 'vue'

export default {
  setup() {
    provide(/* 注入名 */ 'message', /* 值 */ 'hello!')
  }
}
```
```js
import { ref, provide } from 'vue'

const count = ref(0)
provide('key', count)
```

### 应用层 Provide
**全局注入：** 除了在一个组件中提供依赖，我们还可以在整个应用层面提供依赖
```js
import { createApp } from 'vue'

const app = createApp({})
// 直接在app中注入值
app.provide(/* 注入名 */ 'message', /* 值 */ 'hello!')
```

### Inject (注入)
要注入上层组件提供的数据，需使用 `inject()` 函数<br/>
如果通过 provide 提供的值是有响应式的ref，那注入的值也具有响应式。
```vue
<script setup>
import { inject } from 'vue'

const message = inject('message')
</script>
```
如果没有使用 `<script setup>`，`inject()` 需要在 `setup() `内同步调用
```js
import { inject } from 'vue'

export default {
  setup() {
    const message = inject('message')
    return { message }
  }
}
```

### 和响应式数据配合使用
在提供和注入 响应式数据时，尽可能的把对响应式数据的状态修改，放在提供方组件中。<br/>
等于是把修改值的方法也放在父组件中，然后通过 `provide` 一起提供给子组件。这样方便维护。<br/>

#### 步骤
1. 在父组件中定义变量和方法<br/>
2. 通过provide传递给子组件<br/>
3. 子组件通过inject注入值，获得数据<br/>
4. 子组件通过父组件传递过来的方法修改 传递过来的数据的值。<br/>
```vue
<!-- 在供给方组件内 -->
<script setup>
import { provide, ref } from 'vue'

const location = ref('North Pole')

function updateLocation() {
  location.value = 'South Pole'
}

provide('location', {
  location,
  updateLocation
})
</script>


<!-- 在注入方组件 -->
<script setup>
import { inject } from 'vue'

const { location, updateLocation } = inject('location')
</script>

<template>
  <button @click="updateLocation">{{ location }}</button>
</template>
```
如果你想确保提供的数据不能被注入方的组件更改，你可以使用 `readonly()` 来包装提供的值。
```vue
<script setup>
import { ref, provide, readonly } from 'vue'

const count = ref(0)
provide('read-only-count', readonly(count))
</script>
```

## 异步组件
### 基本用法
在大型项目中，我们可能需要拆分应用为更小的块，并仅在需要时再从服务器加载相关组件<br/>
Vue 提供了 `defineAsyncComponent` 方法来实现此功能
```js
import { defineAsyncComponent } from 'vue'

const AsyncComp = defineAsyncComponent(() => {
  return new Promise((resolve, reject) => {
    // ...从服务器获取组件
    resolve(/* 获取到的组件 */)
  })
})
```
### 导入异步组件
```js
import { defineAsyncComponent } from 'vue'

const AsyncComp = defineAsyncComponent(() =>
  import('./components/MyComponent.vue')
)
```
### 父组件中的使用
```vue
<script setup>
import { defineAsyncComponent } from 'vue'

const AdminPage = defineAsyncComponent(() =>
  import('./components/AdminPageComponent.vue')
)
</script>

<template>
  <AdminPage />
</template>
```


