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


