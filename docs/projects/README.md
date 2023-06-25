# 项目经验
## 上海航动科技有限公司

### 拖拽/对话式报表
#### 项目介绍
1. 本项目基于 **Vue3和AntDesign** 进行开发。
2. 主要功能：**拖拽式报表** 和 **对话式报表**。
* 拖拽式报表：通过页面中的左侧的字段，拖拽到右侧的面板中，可以添加到表格、搜索条件、维度这三个区域作为内容显示并保存。保存后生成一张由刚才的字段所组成的新报表页面。
* 自定义字段： 可以通过接口中原有的字段，新建字段，新建的字段可以通过原有字段进行运算，通过给定的运算符进行计算，例如新建字段`剩余数`，计算公式为`总数-消耗数`,保存后可以得到新的字段。
* 对话式报表： 通过与机器人对话聊天的形式，在输入框内发送文字指令。例如：请生成一张近期一个月的订单表，以折线图的形式体现。然后在前端界面实时显示指令所需展示的折线图、柱状图、饼图或者表格等。可以保存后，生成对应的新页面。
3. 拖拽功能的开发 基于 **vuedraggable** 组件拓展开发。

#### 项目图片 
<br/>
<img _src="https://pcsdata.baidu.com/thumbnail/2d6660508s3551ac0d38fc7451b8cc51?fid=1103391745831-16051585-558538628669289&rt=pr&sign=FDTAER-yUdy3dSFZ0SVxtzShv1zcMqd-PyLVy9Qz6qp7J9tXP0ZZ%2B5FR8Rw%3D&expires=48h&chkv=0&chkbd=0&chkpc=&dp-logid=8686014085437618282&dp-callid=0&time=1687680000&bus_no=26&size=c1600_u1600&quality=100&vuk=-&ft=video" :src="$withBase('/loading.jpg')" width="100%">
<img _src="https://pcsdata.baidu.com/thumbnail/4439de265m3b81ac6dd6d22595ff2020?fid=1103391745831-16051585-780334021859691&rt=pr&sign=FDTAER-yUdy3dSFZ0SVxtzShv1zcMqd-2Rtr%2FDrJkMxuL6sU7Fl0p%2BaG0nQ%3D&expires=48h&chkv=0&chkbd=0&chkpc=&dp-logid=8686014085437618282&dp-callid=0&time=1687680000&bus_no=26&size=c1600_u1600&quality=100&vuk=-&ft=video" :src="$withBase('/loading.jpg')" width="100%">
<img _src="https://pcsdata.baidu.com/thumbnail/3549bae1arb8a9a84ab0181486f83a63?fid=1103391745831-16051585-253252855089816&rt=pr&sign=FDTAER-yUdy3dSFZ0SVxtzShv1zcMqd-TPQKAYg1LRpLBW09PQkac1Abbsc%3D&expires=48h&chkv=0&chkbd=0&chkpc=&dp-logid=8686014085437618282&dp-callid=0&time=1687680000&bus_no=26&size=c1600_u1600&quality=100&vuk=-&ft=video" :src="$withBase('/loading.jpg')" width="100%">
<img _src="https://pcsdata.baidu.com/thumbnail/25b3f3bc5ud7a1d46d74bdb92529bf25?fid=1103391745831-16051585-1001366185304817&rt=pr&sign=FDTAER-yUdy3dSFZ0SVxtzShv1zcMqd-kOUj7rEK5XhklGmzXzhEmsVJs8w%3D&expires=48h&chkv=0&chkbd=0&chkpc=&dp-logid=8686014085437618282&dp-callid=0&time=1687680000&bus_no=26&size=c1600_u1600&quality=100&vuk=-&ft=video" :src="$withBase('/loading.jpg')" width="100%">
<img _src="https://pcsdata.baidu.com/thumbnail/26dbf84f2pfdc74f3380b66c79e0bcce?fid=1103391745831-16051585-858188615545815&rt=pr&sign=FDTAER-yUdy3dSFZ0SVxtzShv1zcMqd-fxHMcRHMexBiCijwrT6CbnTPzXk%3D&expires=48h&chkv=0&chkbd=0&chkpc=&dp-logid=8686014085437618282&dp-callid=0&time=1687680000&bus_no=26&size=c1600_u1600&quality=100&vuk=-&ft=video" :src="$withBase('/loading.jpg')" width="100%">
<img _src="https://pcsdata.baidu.com/thumbnail/4439de265m3b81ac6dd6d22595ff2020?fid=1103391745831-16051585-780334021859691&rt=pr&sign=FDTAER-yUdy3dSFZ0SVxtzShv1zcMqd-2Rtr%2FDrJkMxuL6sU7Fl0p%2BaG0nQ%3D&expires=48h&chkv=0&chkbd=0&chkpc=&dp-logid=8686014085437618282&dp-callid=0&time=1687680000&bus_no=26&size=c1600_u1600&quality=100&vuk=-&ft=video" :src="$withBase('/loading.jpg')" width="100%">
<img _src="https://pcsdata.baidu.com/thumbnail/609db2f67m1a8e7d41dc311410c462e3?fid=1103391745831-16051585-750498590375049&rt=pr&sign=FDTAER-yUdy3dSFZ0SVxtzShv1zcMqd-ltr73Sk7J%2FCyYr%2B6qcnEsMn6RV0%3D&expires=48h&chkv=0&chkbd=0&chkpc=&dp-logid=8686014085437618282&dp-callid=0&time=1687680000&bus_no=26&size=c1600_u1600&quality=100&vuk=-&ft=video" :src="$withBase('/loading.jpg')" width="100%">
<img _src="https://pcsdata.baidu.com/thumbnail/8e68e6bb9p7d42658dec288d0ee4ee1b?fid=1103391745831-16051585-479996090390826&rt=pr&sign=FDTAER-yUdy3dSFZ0SVxtzShv1zcMqd-mvu24KhGQ%2BcxEQ%2BBrEKxxiRpT9Q%3D&expires=48h&chkv=0&chkbd=0&chkpc=&dp-logid=8686014085437618282&dp-callid=0&time=1687680000&bus_no=26&size=c1600_u1600&quality=100&vuk=-&ft=video" :src="$withBase('/loading.jpg')" width="100%">
<img _src="https://pcsdata.baidu.com/thumbnail/b7e6bf091maa6a59c76006795cb420f7?fid=1103391745831-16051585-553838278633287&rt=pr&sign=FDTAER-yUdy3dSFZ0SVxtzShv1zcMqd-c6oyZtjzY7QDIHozSjySYKPYUW0%3D&expires=48h&chkv=0&chkbd=0&chkpc=&dp-logid=8686014085437618282&dp-callid=0&time=1687680000&bus_no=26&size=c1600_u1600&quality=100&vuk=-&ft=video" :src="$withBase('/loading.jpg')" width="100%">

### 话加后台管理系统4000端新版
#### 项目介绍
1. 本项目基于 **Vue2和ElementUi** 进行开发，主要功能有：**用户管理、账户管理、权限管理、角色管理、质检管理、订单管理、报表管理、外呼功能、点播功能、机器人外呼等。**<br/>
2. **点呼功能：** 用户可以通过 手动输入手机号的形式，通过 **jssip+websocket** 的技术形式与后台通信层的交互，实现智能软电话的拨打、接听、挂断等操作。<br/>
3. **机器人外呼功能：** 通过新建一个外呼的任务，添加相关的配置和模板后，点击执行，可以实现使用机器人语音且自动拨打到客户的号码上，进行营销流程操作。<br/>
4. **弹屏功能：** 在客服使用管理系统的时候，当客户或者用户拨打电话时，检测到有来电，会自动在页面上弹出一个屏幕，显示客户相关信息、营销信息、实时的聊天记录、订单信息等。<br/>
5. **常规功能：** 其余就是一些CRM管理系统的常规功能，页面的增删改查，菜单栏的权限控制，图表表格等。<br/>

#### 项目图片
<br/>
<img _src="https://pcsdata.baidu.com/thumbnail/8239a4130q2eb80ac44f402345e660cd?fid=1103391745831-16051585-1101065043798314&rt=pr&sign=FDTAER-yUdy3dSFZ0SVxtzShv1zcMqd-YFjlpQII5W2pO%2FxKZGrzyzgTR%2B8%3D&expires=48h&chkv=0&chkbd=0&chkpc=&dp-logid=8685968590317693450&dp-callid=0&time=1687680000&bus_no=26&size=c1600_u1600&quality=100&vuk=-&ft=video" :src="$withBase('/loading.jpg')" width="100%">
<img _src="https://pcsdata.baidu.com/thumbnail/5a74c14a0h4c050f79bbc5cc28f6efd7?fid=1103391745831-16051585-801490946754909&rt=pr&sign=FDTAER-yUdy3dSFZ0SVxtzShv1zcMqd-QhQhMtXjvutCkbQpdOcpKXxxu0A%3D&expires=48h&chkv=0&chkbd=0&chkpc=&dp-logid=8685968590317693450&dp-callid=0&time=1687680000&bus_no=26&size=c1600_u1600&quality=100&vuk=-&ft=video" :src="$withBase('/loading.jpg')" width="100%">
<img _src="https://pcsdata.baidu.com/thumbnail/f8e0ab1fds897c033c172984c1a262cf?fid=1103391745831-16051585-919181430048393&rt=pr&sign=FDTAER-yUdy3dSFZ0SVxtzShv1zcMqd-%2Bhh05TDRxmyeBtAyx5m7MniXRjE%3D&expires=48h&chkv=0&chkbd=0&chkpc=&dp-logid=8685968590317693450&dp-callid=0&time=1687680000&bus_no=26&size=c1600_u1600&quality=100&vuk=-&ft=video" :src="$withBase('/loading.jpg')" width="100%">
<img _src="https://pcsdata.baidu.com/thumbnail/2a97204a3v6ca00974afede398878bc4?fid=1103391745831-16051585-843737375798890&rt=pr&sign=FDTAER-yUdy3dSFZ0SVxtzShv1zcMqd-78wRyNLh0oe%2FJChQ%2FKutCwPQq3E%3D&expires=48h&chkv=0&chkbd=0&chkpc=&dp-logid=8685968590317693450&dp-callid=0&time=1687680000&bus_no=26&size=c1600_u1600&quality=100&vuk=-&ft=video" :src="$withBase('/loading.jpg')" width="100%">
<img _src="https://pcsdata.baidu.com/thumbnail/0173794e8r75877ede6c54795f5518e0?fid=1103391745831-16051585-718127670288927&rt=pr&sign=FDTAER-yUdy3dSFZ0SVxtzShv1zcMqd-5hwcE%2BcI%2FZeZv3NNVagHIkGUSkI%3D&expires=48h&chkv=0&chkbd=0&chkpc=&dp-logid=8685968590317693450&dp-callid=0&time=1687680000&bus_no=26&size=c1600_u1600&quality=100&vuk=-&ft=video" :src="$withBase('/loading.jpg')" width="100%">
<img _src="https://pcsdata.baidu.com/thumbnail/6e5dbdc5evd4d4616b7846e9dec6afca?fid=1103391745831-16051585-570046483307086&rt=pr&sign=FDTAER-yUdy3dSFZ0SVxtzShv1zcMqd-HFhG8fSXcjA8QEvwFwFa1mgtgf4%3D&expires=48h&chkv=0&chkbd=0&chkpc=&dp-logid=8685968590317693450&dp-callid=0&time=1687680000&bus_no=26&size=c1600_u1600&quality=100&vuk=-&ft=video" :src="$withBase('/loading.jpg')" width="100%">
<img _src="https://pcsdata.baidu.com/thumbnail/889a82b54kc733583949421e2e9553e4?fid=1103391745831-16051585-398026168702073&rt=pr&sign=FDTAER-yUdy3dSFZ0SVxtzShv1zcMqd-wyTKhbxxKPEV20Sq7VdoiYQshLo%3D&expires=48h&chkv=0&chkbd=0&chkpc=&dp-logid=8685968590317693450&dp-callid=0&time=1687680000&bus_no=26&size=c1600_u1600&quality=100&vuk=-&ft=video" :src="$withBase('/loading.jpg')" width="100%">
<img _src="https://pcsdata.baidu.com/thumbnail/707541966m3f64b2a63f9f42290980d1?fid=1103391745831-16051585-130962019607123&rt=pr&sign=FDTAER-yUdy3dSFZ0SVxtzShv1zcMqd-yuv6ztZjuP0sE0vjsG1q961iU3M%3D&expires=48h&chkv=0&chkbd=0&chkpc=&dp-logid=8685968590317693450&dp-callid=0&time=1687680000&bus_no=26&size=c1600_u1600&quality=100&vuk=-&ft=video" :src="$withBase('/loading.jpg')" width="100%">

### 话加后台管理系统3000端新版
1. 项目基于 **Vue2和ElementUi** 进行开发。主要都是对项目、任务、订单、业务、报表等一些内容的配置、新建和编辑。配置的信息会在4000版本的系统中更新显示，两个系统是互通的。<br/>
2. 项目页面很多，比较庞大，虽说没有复杂的功能点，但是内容很多，开发周期较长。<br/>

#### 项目图片
<br/>
<img _src="https://pcsdata.baidu.com/thumbnail/52e4a3381ra10a3d6192a3ffe91dde23?fid=1103391745831-16051585-684958396139161&rt=pr&sign=FDTAER-yUdy3dSFZ0SVxtzShv1zcMqd-VgQ%2BbIYLpQnWA4MEmh1zrKI5stg%3D&expires=48h&chkv=0&chkbd=0&chkpc=&dp-logid=8685912705383739192&dp-callid=0&time=1687680000&bus_no=26&size=c1600_u1600&quality=100&vuk=-&ft=video" :src="$withBase('/loading.jpg')" width="100%">
<img _src="https://pcsdata.baidu.com/thumbnail/363e12b80s1dae443f1219fe1e3fbdf8?fid=1103391745831-16051585-166152020746921&rt=pr&sign=FDTAER-yUdy3dSFZ0SVxtzShv1zcMqd-SNqh36tPQbFRrgkwYIhYCWLnlYA%3D&expires=48h&chkv=0&chkbd=0&chkpc=&dp-logid=8685912705383739192&dp-callid=0&time=1687680000&bus_no=26&size=c1600_u1600&quality=100&vuk=-&ft=video" :src="$withBase('/loading.jpg')" width="100%">
<img _src="https://pcsdata.baidu.com/thumbnail/d4f0eb2fbi7e94ddd3710c9bc2ba7c44?fid=1103391745831-16051585-957029776851328&rt=pr&sign=FDTAER-yUdy3dSFZ0SVxtzShv1zcMqd-FQODphL9v%2Bj4Y8t5MR6910DQgK8%3D&expires=48h&chkv=0&chkbd=0&chkpc=&dp-logid=8685912705383739192&dp-callid=0&time=1687680000&bus_no=26&size=c1600_u1600&quality=100&vuk=-&ft=video" :src="$withBase('/loading.jpg')" width="100%">
<img _src="https://pcsdata.baidu.com/thumbnail/06917ee2ek9c5fa4d5563ebfe438611d?fid=1103391745831-16051585-419513296611861&rt=pr&sign=FDTAER-yUdy3dSFZ0SVxtzShv1zcMqd-qDD06OO%2BnP7u5AcXrt72j0FWyDM%3D&expires=48h&chkv=0&chkbd=0&chkpc=&dp-logid=8685912705383739192&dp-callid=0&time=1687680000&bus_no=26&size=c1600_u1600&quality=100&vuk=-&ft=video" :src="$withBase('/loading.jpg')" width="100%">
<img _src="https://pcsdata.baidu.com/thumbnail/5e55e9b4amd1fea72e23e912d1bbcc4f?fid=1103391745831-16051585-2259846167333&rt=pr&sign=FDTAER-yUdy3dSFZ0SVxtzShv1zcMqd-Ij1RM6urfx%2FJUcu7s0Irj5ppZ2M%3D&expires=48h&chkv=0&chkbd=0&chkpc=&dp-logid=8685912705383739192&dp-callid=0&time=1687680000&bus_no=26&size=c1600_u1600&quality=100&vuk=-&ft=video" :src="$withBase('/loading.jpg')" width="100%">

### 话加后台系统4000旧版
1. 项目基于 **Vue2和ElementUi** 进行开发。<br/>
2. 与4000新版相比，在原来的基础上添加了一些功能和页面，具体也是以软电话为主。<br/>

#### 项目图片
<br/>
<img _src="https://pcsdata.baidu.com/thumbnail/3d4afa626ocd967e4afd6b14d520b8d6?fid=1103391745831-16051585-338158414015220&rt=pr&sign=FDTAER-yUdy3dSFZ0SVxtzShv1zcMqd-r3aSkpiBncS%2FdKJaArCbLYmX0e8%3D&expires=48h&chkv=0&chkbd=0&chkpc=&dp-logid=8686073069772736887&dp-callid=0&time=1687680000&bus_no=26&size=c1600_u1600&quality=100&vuk=-&ft=video" :src="$withBase('/loading.jpg')" width="100%">
<img _src="https://pcsdata.baidu.com/thumbnail/7a209171ds0fac7bf80d12bb7db7dea6?fid=1103391745831-16051585-358095862772955&rt=pr&sign=FDTAER-yUdy3dSFZ0SVxtzShv1zcMqd-zN6VBhQnmWTvWs3LvjLwx9aNASg%3D&expires=48h&chkv=0&chkbd=0&chkpc=&dp-logid=8686073069772736887&dp-callid=0&time=1687680000&bus_no=26&size=c1600_u1600&quality=100&vuk=-&ft=video" :src="$withBase('/loading.jpg')" width="100%">
<img _src="https://pcsdata.baidu.com/thumbnail/96dc5c53fl2679eb104a09b30476d7e1?fid=1103391745831-16051585-334725818953200&rt=pr&sign=FDTAER-yUdy3dSFZ0SVxtzShv1zcMqd-3WA5QlPH1EZeWTZ7A06Xx9y%2FXeM%3D&expires=48h&chkv=0&chkbd=0&chkpc=&dp-logid=8686073069772736887&dp-callid=0&time=1687680000&bus_no=26&size=c1600_u1600&quality=100&vuk=-&ft=video" :src="$withBase('/loading.jpg')" width="100%">
<img _src="https://pcsdata.baidu.com/thumbnail/21ca0f47fge14212f7019b0f8a15ba76?fid=1103391745831-16051585-806447166650949&rt=pr&sign=FDTAER-yUdy3dSFZ0SVxtzShv1zcMqd-uI0eDd3uDaCHM5lU7kopqJAO6dc%3D&expires=48h&chkv=0&chkbd=0&chkpc=&dp-logid=8686073069772736887&dp-callid=0&time=1687680000&bus_no=26&size=c1600_u1600&quality=100&vuk=-&ft=video" :src="$withBase('/loading.jpg')" width="100%">

### OEM机器人后台系统
#### 项目介绍
1. 基于 **Vue2+ElementUI** 开发。
2. 记录软电话的外呼流程，新建流程，编辑流程等功能。
3. 系统中比较复杂的功能为一个 **流程图连线** 功能。
**流程图连线功能包括：**
* 新建流程图，添加相关信息，流程图模块节点可随意拖拽。
* 流程图连线功能，对应节点之间可以互相连线表明节点之间的关系。
* 保存流程图，整合为对应的数据格式后保存。
* 还有一些放大缩小，位置记忆等功能。

#### 项目图片
<br/>
<img _src="https://pcsdata.baidu.com/thumbnail/564482d4ah4bab7d6fd18111e3c986ed?fid=1103391745831-16051585-1058223302423575&rt=pr&sign=FDTAER-yUdy3dSFZ0SVxtzShv1zcMqd-Yqgz8O%2FXZ%2F8Z1u%2BBnrdVaRNmDsE%3D&expires=48h&chkv=0&chkbd=0&chkpc=&dp-logid=8686098001964127683&dp-callid=0&time=1687680000&bus_no=26&size=c1600_u1600&quality=100&vuk=-&ft=video" :src="$withBase('/loading.jpg')" width="100%">
<img _src="https://pcsdata.baidu.com/thumbnail/cee761746h9d3aef9bed02a424db445d?fid=1103391745831-16051585-1010741488355949&rt=pr&sign=FDTAER-yUdy3dSFZ0SVxtzShv1zcMqd-Tm0CWMhv2pz88iUy%2B0ntqxeevp4%3D&expires=48h&chkv=0&chkbd=0&chkpc=&dp-logid=8686098001964127683&dp-callid=0&time=1687680000&bus_no=26&size=c1600_u1600&quality=100&vuk=-&ft=video" :src="$withBase('/loading.jpg')" width="100%">
<img _src="https://pcsdata.baidu.com/thumbnail/f1deb8a95n325701ff8e60084c0fe99e?fid=1103391745831-16051585-805184433454731&rt=pr&sign=FDTAER-yUdy3dSFZ0SVxtzShv1zcMqd-a4YB0acUZIIvHZyH6griVGx4otU%3D&expires=48h&chkv=0&chkbd=0&chkpc=&dp-logid=8686098001964127683&dp-callid=0&time=1687680000&bus_no=26&size=c1600_u1600&quality=100&vuk=-&ft=video" :src="$withBase('/loading.jpg')" width="100%">
<img _src="https://pcsdata.baidu.com/thumbnail/2689fc65dm90839cc91a7d2973f5eb2c?fid=1103391745831-16051585-792701554367039&rt=pr&sign=FDTAER-yUdy3dSFZ0SVxtzShv1zcMqd-BcNLxgIeGiE01RIsAZUuKwc5Sm0%3D&expires=48h&chkv=0&chkbd=0&chkpc=&dp-logid=8686098001964127683&dp-callid=0&time=1687680000&bus_no=26&size=c1600_u1600&quality=100&vuk=-&ft=video" :src="$withBase('/loading.jpg')" width="100%">
<img _src="https://pcsdata.baidu.com/thumbnail/62e8e9bbfk7391201fdb6d8f52844211?fid=1103391745831-16051585-650570464711879&rt=pr&sign=FDTAER-yUdy3dSFZ0SVxtzShv1zcMqd-zlvtsOiM2%2BtJ9%2FeLgz2LsOTQKDE%3D&expires=48h&chkv=0&chkbd=0&chkpc=&dp-logid=8686098001964127683&dp-callid=0&time=1687680000&bus_no=26&size=c1600_u1600&quality=100&vuk=-&ft=video" :src="$withBase('/loading.jpg')" width="100%">
<img _src="https://pcsdata.baidu.com/thumbnail/cb93ddec6td8a9b764bc00f87b278888?fid=1103391745831-16051585-473731894167305&rt=pr&sign=FDTAER-yUdy3dSFZ0SVxtzShv1zcMqd-R6kwvvn4ND7KRVJtUvhS60Xqf8I%3D&expires=48h&chkv=0&chkbd=0&chkpc=&dp-logid=8686098001964127683&dp-callid=0&time=1687680000&bus_no=26&size=c1600_u1600&quality=100&vuk=-&ft=video" :src="$withBase('/loading.jpg')" width="100%">
<img _src="https://pcsdata.baidu.com/thumbnail/8353bdc64r0da67005dca6700036b3f3?fid=1103391745831-16051585-458045118152253&rt=pr&sign=FDTAER-yUdy3dSFZ0SVxtzShv1zcMqd-YP%2FdKyAqVO0aLcf%2Fuv7OpserMUw%3D&expires=48h&chkv=0&chkbd=0&chkpc=&dp-logid=8686098001964127683&dp-callid=0&time=1687680000&bus_no=26&size=c1600_u1600&quality=100&vuk=-&ft=video" :src="$withBase('/loading.jpg')" width="100%">

### 话术数据大屏
#### 项目介绍
1. 基于 **Vue2+ElementUI** 开发。
2. 主要用户数据的可视化展示，使用了 `Echrts` 图表开发。

#### 项目图片
<br/>
<img _src="https://pcsdata.baidu.com/thumbnail/5713453a0t3beda2f51f7c25b70129dc?fid=1103391745831-16051585-1038280374246867&rt=pr&sign=FDTAER-yUdy3dSFZ0SVxtzShv1zcMqd-zpTZYePSG1eZ7i5UsGdPRHiKDHI%3D&expires=48h&chkv=0&chkbd=0&chkpc=&dp-logid=8686125902328651882&dp-callid=0&time=1687680000&bus_no=26&size=c1600_u1600&quality=100&vuk=-&ft=video" :src="$withBase('/loading.jpg')" width="100%">
<img _src="https://pcsdata.baidu.com/thumbnail/26dd1509bn3e2c8b80135295ab7c2746?fid=1103391745831-16051585-1104082672443723&rt=pr&sign=FDTAER-yUdy3dSFZ0SVxtzShv1zcMqd-tgHtM6yJlQAlMWgh89JmJIL5AXs%3D&expires=48h&chkv=0&chkbd=0&chkpc=&dp-logid=8686125902328651882&dp-callid=0&time=1687680000&bus_no=26&size=c1600_u1600&quality=100&vuk=-&ft=video" :src="$withBase('/loading.jpg')" width="100%">
<img _src="https://pcsdata.baidu.com/thumbnail/778f98edeo61e05ad73007b6e89eec16?fid=1103391745831-16051585-1082762049509520&rt=pr&sign=FDTAER-yUdy3dSFZ0SVxtzShv1zcMqd-ybED0%2FNDViXUXskFbXc566aayF0%3D&expires=48h&chkv=0&chkbd=0&chkpc=&dp-logid=8686125902328651882&dp-callid=0&time=1687680000&bus_no=26&size=c1600_u1600&quality=100&vuk=-&ft=video" :src="$withBase('/loading.jpg')" width="100%">
<img _src="https://pcsdata.baidu.com/thumbnail/ee49f7632j357a5c6ed192a30b9ad491?fid=1103391745831-16051585-1055944805308192&rt=pr&sign=FDTAER-yUdy3dSFZ0SVxtzShv1zcMqd-JRolscS3c7lK%2B1JZyakIHou8MqQ%3D&expires=48h&chkv=0&chkbd=0&chkpc=&dp-logid=8686125902328651882&dp-callid=0&time=1687680000&bus_no=26&size=c1600_u1600&quality=100&vuk=-&ft=video" :src="$withBase('/loading.jpg')" width="100%">
<img _src="https://pcsdata.baidu.com/thumbnail/04f4db3feu98bae84858ae105f8b8bc7?fid=1103391745831-16051585-882544147974443&rt=pr&sign=FDTAER-yUdy3dSFZ0SVxtzShv1zcMqd-jEW6gmXtKe%2BF7udjz2pB%2FU0fnho%3D&expires=48h&chkv=0&chkbd=0&chkpc=&dp-logid=8686125902328651882&dp-callid=0&time=1687680000&bus_no=26&size=c1600_u1600&quality=100&vuk=-&ft=video" :src="$withBase('/loading.jpg')" width="100%">
<img _src="https://pcsdata.baidu.com/thumbnail/f46ec664ei2c7f755a6596d27aee8e52?fid=1103391745831-16051585-427897115519104&rt=pr&sign=FDTAER-yUdy3dSFZ0SVxtzShv1zcMqd-ctS3krr6rfedSY4vkqqYJzxCuMs%3D&expires=48h&chkv=0&chkbd=0&chkpc=&dp-logid=8686125902328651882&dp-callid=0&time=1687680000&bus_no=26&size=c1600_u1600&quality=100&vuk=-&ft=video" :src="$withBase('/loading.jpg')" width="100%">
<img _src="https://pcsdata.baidu.com/thumbnail/c3668c508td013b6e5606f0bfe1d4cfe?fid=1103391745831-16051585-251551718147373&rt=pr&sign=FDTAER-yUdy3dSFZ0SVxtzShv1zcMqd-1pJfYtvAjjHvGcwDbHSznieb8FE%3D&expires=48h&chkv=0&chkbd=0&chkpc=&dp-logid=8686125902328651882&dp-callid=0&time=1687680000&bus_no=26&size=c1600_u1600&quality=100&vuk=-&ft=video" :src="$withBase('/loading.jpg')" width="100%">

### 纳管中屏项目
#### 项目介绍
1. 基于 **Vue2+ElementUI** 开发。
2. 主要用与数据的展示和数据的可视化。
3. 与大屏项目不同的是，这个项目的数据量非常大，达到了亿级，因此在开发的时，无论是前端还是后端，都做了不少接口、页面的优化操作。

#### 项目图片
<br/>
<img _src="https://pcsdata.baidu.com/thumbnail/5b90655a8i871bc2f114a16229e9651a?fid=1103391745831-16051585-888208499087727&rt=pr&sign=FDTAER-yUdy3dSFZ0SVxtzShv1zcMqd-31vjMvH3D0BSLOMLepz6cC0yBpo%3D&expires=48h&chkv=0&chkbd=0&chkpc=&dp-logid=8686153794162151930&dp-callid=0&time=1687680000&bus_no=26&size=c1600_u1600&quality=100&vuk=-&ft=video" :src="$withBase('/loading.jpg')" width="100%">
<img _src="https://pcsdata.baidu.com/thumbnail/147103196s7657aa4303206d6610d0b6?fid=1103391745831-16051585-880026392053949&rt=pr&sign=FDTAER-yUdy3dSFZ0SVxtzShv1zcMqd-opI0ZSfKurnscYLPm9lr3Pi1GPs%3D&expires=48h&chkv=0&chkbd=0&chkpc=&dp-logid=8686153794162151930&dp-callid=0&time=1687680000&bus_no=26&size=c1600_u1600&quality=100&vuk=-&ft=video" :src="$withBase('/loading.jpg')" width="100%">
<img _src="https://pcsdata.baidu.com/thumbnail/40c73ba67t41e497586d1c9b91dc0df3?fid=1103391745831-16051585-644660222235062&rt=pr&sign=FDTAER-yUdy3dSFZ0SVxtzShv1zcMqd-NFDozBGaA61WBBvKb4EJEPtW6GQ%3D&expires=48h&chkv=0&chkbd=0&chkpc=&dp-logid=8686153794162151930&dp-callid=0&time=1687680000&bus_no=26&size=c1600_u1600&quality=100&vuk=-&ft=video" :src="$withBase('/loading.jpg')" width="100%">
<img _src="https://pcsdata.baidu.com/thumbnail/1eb64772dt3e136f2dde038ad6c0e271?fid=1103391745831-16051585-623225220042453&rt=pr&sign=FDTAER-yUdy3dSFZ0SVxtzShv1zcMqd-WZzPO2NUdfWGB30ipx6ynxbFfug%3D&expires=48h&chkv=0&chkbd=0&chkpc=&dp-logid=8686153794162151930&dp-callid=0&time=1687680000&bus_no=26&size=c1600_u1600&quality=100&vuk=-&ft=video" :src="$withBase('/loading.jpg')" width="100%">
<img _src="https://pcsdata.baidu.com/thumbnail/b8d4f6535se63158ca140d206ba691a1?fid=1103391745831-16051585-576929964176983&rt=pr&sign=FDTAER-yUdy3dSFZ0SVxtzShv1zcMqd-muGRqWzmWbhzsFV26G3Mp8m99bQ%3D&expires=48h&chkv=0&chkbd=0&chkpc=&dp-logid=8686153794162151930&dp-callid=0&time=1687680000&bus_no=26&size=c1600_u1600&quality=100&vuk=-&ft=video" :src="$withBase('/loading.jpg')" width="100%">
<img _src="https://pcsdata.baidu.com/thumbnail/9166702d7h9877ef068d46f93271908c?fid=1103391745831-16051585-344826259534090&rt=pr&sign=FDTAER-yUdy3dSFZ0SVxtzShv1zcMqd-oPKkU8GHBz1UsiQEa1ej0uRTIs4%3D&expires=48h&chkv=0&chkbd=0&chkpc=&dp-logid=8686153794162151930&dp-callid=0&time=1687680000&bus_no=26&size=c1600_u1600&quality=100&vuk=-&ft=video" :src="$withBase('/loading.jpg')" width="100%">
<img _src="https://pcsdata.baidu.com/thumbnail/b18135c84s3cdccf524d0d109409844e?fid=1103391745831-16051585-58846584168109&rt=pr&sign=FDTAER-yUdy3dSFZ0SVxtzShv1zcMqd-hA%2Fqr2gsgZLGt%2Ba9Kk01lblaYUI%3D&expires=48h&chkv=0&chkbd=0&chkpc=&dp-logid=8686153794162151930&dp-callid=0&time=1687680000&bus_no=26&size=c1600_u1600&quality=100&vuk=-&ft=video" :src="$withBase('/loading.jpg')" width="100%">
<img _src="https://pcsdata.baidu.com/thumbnail/f3f030808g663fc2a740cb37310ed7a1?fid=1103391745831-16051585-932232609159085&rt=pr&sign=FDTAER-yUdy3dSFZ0SVxtzShv1zcMqd-%2Bom3gbdun%2FrOMAahXB4f6YfpmbU%3D&expires=48h&chkv=0&chkbd=0&chkpc=&dp-logid=8686176411489037329&dp-callid=0&time=1687680000&bus_no=26&size=c1600_u1600&quality=100&vuk=-&ft=video" :src="$withBase('/loading.jpg')" width="100%">

### 综合演示系统
#### 项目介绍
1. 基于 **Vue2+ElementUI** 开发。
2. 纯静态页面，用于做流程的介绍和演示。

#### 项目图片
<br/>
<img _src="https://pcsdata.baidu.com/thumbnail/9b0afcc58mdfecf2da335e1971d39258?fid=1103391745831-16051585-27695363591863&rt=pr&sign=FDTAER-yUdy3dSFZ0SVxtzShv1zcMqd-uuDHjxyTPwcuj8eHYR5KIaZyd28%3D&expires=48h&chkv=0&chkbd=0&chkpc=&dp-logid=8686185553867890210&dp-callid=0&time=1687680000&bus_no=26&size=c1600_u1600&quality=100&vuk=-&ft=video" :src="$withBase('/loading.jpg')" width="100%">
<img _src="https://pcsdata.baidu.com/thumbnail/6d463b532s485969af02c207a6acb389?fid=1103391745831-16051585-261113410426970&rt=pr&sign=FDTAER-yUdy3dSFZ0SVxtzShv1zcMqd-8huiWnpvGMJE9I2CywXA3x6N6c8%3D&expires=48h&chkv=0&chkbd=0&chkpc=&dp-logid=8686185553867890210&dp-callid=0&time=1687680000&bus_no=26&size=c1600_u1600&quality=100&vuk=-&ft=video" :src="$withBase('/loading.jpg')" width="100%">
<img _src="https://pcsdata.baidu.com/thumbnail/2b652ebf4te83cb384bb11109397bceb?fid=1103391745831-16051585-360433278491869&rt=pr&sign=FDTAER-yUdy3dSFZ0SVxtzShv1zcMqd-qLGfFhYLCVn03qUceDGj0ql9VrI%3D&expires=48h&chkv=0&chkbd=0&chkpc=&dp-logid=8686185553867890210&dp-callid=0&time=1687680000&bus_no=26&size=c1600_u1600&quality=100&vuk=-&ft=video" :src="$withBase('/loading.jpg')" width="100%">


## 宣怀教育科技有限公司
### 宣怀小程序开发
#### 项目介绍
1. 基于微信端小程序开发。使用小程序源生开发。
2. 功能包括公司课程展示与订购，活动参与报名，线下活动签到打卡，参与转发绘图保存卡片等功能。

### 教师微信端
#### 项目介绍
1. 内嵌在企业微信应用中的页面，给老师使用的移动端应用。
2. 功能包含：学生请假审批，出勤记录，课表查看，发布活动，与app端（学生用）即使消息聊天功能等。聊天功能包含发送文字、图片、表情、语音等功能。
3. 聊天的接口使用了**网易云信**。

### 混合app项目开发
#### 项目介绍
1. 基于 vue+vux 开发。
2. 通过ios和安卓的对接，开发app上的课程列表，老师列表，课程安排等功能。

### PC移动官网和活动
#### 项目介绍
1. PC端的官网页面、活动专题页面前端开发。
2. 响应式布局开发。功能：页面介绍，地理位置查询，活动报名等。

### CRM后台管理系统
#### 项目介绍
1. 使用 **element ui与vue vuex** 开发
2. 包含图表数据查看、列表常规操作、角色菜单栏权限分配、课程表查看和排课、订单购物车操作结算

## 上海雨施医疗科技股份有限公司
### 医象后台管理系统开发
#### 项目介绍
1. 用于管理买家相关功能的后台。
2. 内容包括：新增订单、订单跟踪、购物车、采购审核出入库、库存管理，单位资料等功能。

### 医美选电商网站
#### 项目介绍
1. 在线电商销售医疗美容产品的网站
2. 包括常规电商网站的通用功能，浏览选择商品，加入购物车收藏，支付，个人中心等一系列常规功能。

## 东方童画（上海）教育科技有限公司
### 童年画语绘画大赛
#### 项目介绍
1. 比赛报名登陆，上传自己的作品头像信息，语音。形成一个画廊，通过每日登陆分享等操作过去积分，用于礼物赠送。并且还可以相互点赞逛画廊。
2. 画廊通过3D视图展示，模拟真实的视角。

### 教务微信端
#### 项目介绍
1. 用户群为在公司在职的老师们
2. 用户统计学生的出勤情况，以及可以进行签到
3. 可以查看每日课程表以及进行旷课调课的处理

### 学员中心
#### 项目介绍
1. 项目包含课程表、考勤记录、签到、学员活动、活动报名、熊猫到家（快递）、画廊展示、作品上传、点赞。合同列表等一系列功能。
2. 用户群为学生家长，可以用于一些常用功能的操作申请和展示，与公司的后台模块交互。

### PC/移动官网开发
#### 项目介绍
1. 根据设计稿的内容以及产品经理的要求，
2. 完成官网页面的切图开发交互以后后期的维护。
pc官网：[http://www.dfth.com/](http://www.dfth.com/)
移动官网：[http://m.dfth.com](http://m.dfth.com)

## 北京众信国际旅行社股份有限公司
### PC移动官网改版和维护
#### 项目介绍
1. 负责官网页面优化迭代，首页改版，功能添加
2. 移动端优化页面重构
3. 其他活动页项目开发
4. 负责网站日常维护运营

### 网站跟团预定流程改版
#### 项目介绍
网站整个跟团游，预定流程改版<br/>
目的：通过精简下单流程并优化用户体验
从下单第一步（选择出游信息）→第二步（完善订单填写出游人）→第三步（修改优惠方案）
第四步（在线支付）→第五步（提交成功/失败）等等。

### 网站首页改版
#### 项目介绍
1. 添加一些首页的新功能和新模块。
2. 更新页面的整体风格和样式，使用大屏的布局。


