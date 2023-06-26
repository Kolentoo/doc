## Anchor 对象：指HTML超链接
#### 1.修改一个链接的文本，链接和target
```js
//html部分
<a id="myAnchor" href="http://www.microsoft.com">访问 Microsoft</a>
<input type="button" onclick="changeLink()" value="改变链接">
<p>改变超链接的文本和 URL。也改变 target 属性。target 属性的默认设置是 "_self"，
这意味着会在相同的窗口中打开链接。
通过把 target 属性设置为 "_blank"，链接将在新窗口中打开。
</p>

//js部分
function changeLink(){
document.getElementById('myAnchor').innerHTML="访问 W3School"
document.getElementById('myAnchor').href="http://www.w3school.com.cn"
document.getElementById('myAnchor').target="_blank"
}
```

## Document 对象：指 页面文档文本
#### 1.document输出流输出 文本 或者 HTML
```js
document.write("Hello World!") //Hello World
document.write("<h1>Hello World!</h1>")  //带h1标签效果的 Hello World
document.write(document.title) //返回当前页面的标题
document.write(document.URL) //返回当前页面的URL
```
#### document.URL , document.referrer , location.href 的区别：
①. 从输出结果上，document.URL 和 windows.location.href 没有区别。

②. 非要说区别的话，你只可以读取document.URL的值，不能修改它。

`windows.location.href`的值你即可以读取也可以修改，可以使用它进行页面跳转。

③. referrer则是返回前一个来源页面的URL，并不是当前页面。

#### 2.元素选择
第一个返回选中id，其余则是返回一个数组
```js
document.getElementById()
document.getElementsByName()
document.getElementsByClassName()
document.getElementsByTagName()
```

## Event 对象
#### 1.获取鼠标的按键，返回按键索引 event.button
```html
<script type="text/javascript">
function whichButton(event)
{
var btnNum = event.button;
if (btnNum==2){
  alert("您点击了鼠标右键！")
  }
else if(btnNum==0){
  alert("您点击了鼠标左键！")
  }
else if(btnNum==1){
  alert("您点击了鼠标中键！");
  }
else{
  alert("您点击了" + btnNum+ "号键，我不能确定它的名称。");
  }
}
</script>
</head>
<body onclick="whichButton(event)">
<p>请在文档中点击鼠标。一个消息框会提示出您点击了哪个鼠标按键。</p>
</body>
```

#### 2.获取光标的坐标 event.clientX
```js
x=event.clientX
y=event.clientY  //获取光标的位置Y轴
```
#### 3.获取按键码 event.keyCode
```html
<script type="text/javascript">
function whichButton(event){
alert(event.keyCode)
}
</script>
</head>
<body onkeyup="whichButton(event)">
<p><b>注释：</b>在测试这个例子时，要确保右侧的框架获得了焦点。</p>
<p>在键盘上按一个键。消息框会提示出该按键的 unicode。</p>
</body>
```
#### 4.获取光标相对于屏幕的 位置 event.screenX
```js
x=event.screenX
y=event.screenY
```
#### 6.得到事件元素 和 事件类型 vent.target   event.type
```html
function getEventType(event){ 
  console.info(event.target); //返回事件目标元素
  console.info(event.type);  //返回事件类型 事件名称
  }
</script>
</head>

<body onmousedown="getEventType(event)">
```

## Form 和 Input 对象
#### 1.复选框
```html
<input type="checkbox" id="myCheck" />
<input type="button" onclick="check()" value="选定复选框" />
<input type="button" onclick="uncheck()" value="取消选定复选框" />
```
```js
//js
document.getElementById("myCheck").checked=true //选中
document.getElementById("myCheck").checked=false //取消选中
```
#### 2.获取input的value
```html
function check(browser)
  {
  document.getElementById("answer").value=browser
  }
</script>
</head>
<body>

<p>您喜欢哪款浏览器？</p>

<form>
<input type="radio" name="browser" onclick="check(this.value)" value="Internet Explorer">Internet Explorer<br />
<input type="radio" name="browser" onclick="check(this.value)" value="Firefox">Firefox<br />
<input type="radio" name="browser" onclick="check(this.value)" value="Netscape">Netscape<br />
<input type="radio" name="browser" onclick="check(this.value)" value="Opera">Opera<br />
<br />
您喜欢的浏览器是：<input type="text" id="answer" size="20">
</form>
```
#### 3.form表单相关
①reset()可以清空表单数据

②submit()可以提交表单
```js
function formReset(){
document.getElementById("myForm").reset()
}
document.getElementById("myForm").submit()
document.getElementById('text1').focus() //获取焦点
document.getElementById('text1').blur() //失去焦点

<body>
<p>在下面的文本框中输入一些文本，然后点击重置按钮就可以重置表单。</p>
<form id="myForm">
姓名：<input type="text" size="20"><br />
<input type="button" onclick="formReset()" value="重置">
</form>
```
## Location 对象
```js
window.location="/index.html" //基于原有域名下的页面跳转
window.location.reload(); //重载页面
```
#### window.location , window.location.href , window,location.replace的区别
`window.location`是页面的位置对象，页面基于域名后添加新增的url跳转
`window.location.href`是 location的一个属性值，页面替换url跳转
如果需要打开新窗口，使用window.open('')方法

有3个页面 a,b,c

如果当前页面是c页面，并且c页面是这样跳转过来的：a->b->c
1：b->c 是通过window.location.replace("..xx/c")   此时b页面的url会被c页面代替，并且点击后退按钮时会回退到a页面（最开始的页面） 

2：b->c是通过window.location.href("..xx/c")    此时b页面的路径会被c页面代替，但是点击回按钮后页面回退的是b页面

两者的区别: 两者后退时所回退的页面不一样

## Navigator 对象
用于检测和获取浏览器相关信息
```js
navigator.appName //appname
navigator.appVersion //浏览器的版本信息
naviigator.appCodeName //浏览器代码 
navigator.cookieEnabled //是否启用了cookie
navigator.userAgent //浏览器的用户代理报头
```

## Option 和 Select 对象
启用与禁用select
```js
document.getElementById("mySelect").disabled=true
document.getElementById("mySelect").disabled=false
```
设置可以选取多个option
```js
document.getElementById("mySelect").multiple=true
```
更改选择项
```js
document.getElementById("orange").selected=true;
```

## window 对象
```js
window.open() //打开新窗口
window.location //在域名后追加地址进入新页面
window.location.href //页面地址
window.location.reload() //页面重载
window.print() //打印页面
window.scrollTo(100,500) //窗口滚动到指定位置
```