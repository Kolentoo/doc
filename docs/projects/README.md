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
<img src="/projects/tuozhuai/denglu.jpg" width="100%">
<img src="/projects/tuozhuai/chuangjianduihua1.png" width="100%">
<img src="/projects/tuozhuai/chuangjianduihua2.png" width="100%">
<img src="/projects/tuozhuai/chuangjianduihua3.png" width="100%">
<img src="/projects/tuozhuai/duihuabaobiao.png" width="100%">
<img src="/projects/tuozhuai/zidingyibaobiao.jpg" width="100%">
<img src="/projects/tuozhuai/chuangjianbaobiao1.jpg" width="100%">
<img src="/projects/tuozhuai/chuangjianbaobiao2.jpg" width="100%">
<img src="/projects/tuozhuai/chuangjianbaobiao3.jpg" width="100%">
<img src="/projects/tuozhuai/hangyeshuyu.png" width="100%">

### 话加后台管理系统4000端新版
#### 项目介绍
1. 本项目基于 **Vue2和ElementUi** 进行开发，主要功能有：**用户管理、账户管理、权限管理、角色管理、质检管理、订单管理、报表管理、外呼功能、点播功能、机器人外呼等。**<br/>
2. **点呼功能：** 用户可以通过 手动输入手机号的形式，通过 **jssip+websocket** 的技术形式与后台通信层的交互，实现智能软电话的拨打、接听、挂断等操作。<br/>
3. **机器人外呼功能：** 通过新建一个外呼的任务，添加相关的配置和模板后，点击执行，可以实现使用机器人语音且自动拨打到客户的号码上，进行营销流程操作。<br/>
4. **弹屏功能：** 在客服使用管理系统的时候，当客户或者用户拨打电话时，检测到有来电，会自动在页面上弹出一个屏幕，显示客户相关信息、营销信息、实时的聊天记录、订单信息等。<br/>
5. **常规功能：** 其余就是一些CRM管理系统的常规功能，页面的增删改查，菜单栏的权限控制，图表表格等。<br/>

#### 项目图片
<br/>
<img src="/projects/4000/denglu.jpg" width="100%">
<img src="/projects/4000/dianhurenwu.jpg" width="100%">
<img src="/projects/4000/dianhurenwu2.jpg" width="100%">
<img src="/projects/4000/jiankong.jpg" width="100%">
<img src="/projects/4000/renlianshibie.jpg" width="100%">
<img src="/projects/4000/zhijian1.jpg" width="100%">
<img src="/projects/4000/zidongrenwu.jpg" width="100%">
<img src="/projects/4000/screen.png" width="100%">

### 话加后台管理系统3000端新版
1. 项目基于 **Vue2和ElementUi** 进行开发。主要都是对项目、任务、订单、业务、报表等一些内容的配置、新建和编辑。配置的信息会在4000版本的系统中更新显示，两个系统是互通的。<br/>
2. 项目页面很多，比较庞大，虽说没有复杂的功能点，但是内容很多，开发周期较长。<br/>

#### 项目图片
<br/>
<img src="/projects/3000/shouye.jpg" width="100%">
<img src="/projects/3000/chanpinshezhi.jpg" width="100%">
<img src="/projects/3000/kanban.jpg" width="100%">
<img src="/projects/3000/huashushezhi.jpg" width="100%">
<img src="/projects/3000/xiangmuguanli1.jpg" width="100%">

### 话加后台系统4000旧版
1. 项目基于 **Vue2和ElementUi** 进行开发。<br/>
2. 与4000新版相比，在原来的基础上添加了一些功能和页面，具体也是以软电话为主。<br/>

#### 项目图片
<br/>
<img src="/projects/4000_2/denglu.jpg" width="100%">
<img src="/projects/4000_2/shouye.jpg" width="100%">
<img src="/projects/4000_2/tonghuajilu.jpg" width="100%">
<img src="/projects/4000_2/dingdanxinxi.jpg" width="100%">

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
<img src="/projects/OEM/denglu.jpg" width="100%">
<img src="/projects/OEM/gongzuotai.jpg" width="100%">
<img src="/projects/OEM/huashuguanli.jpg" width="100%">
<img src="/projects/OEM/huashushichang.jpg" width="100%">
<img src="/projects/OEM/hujiaojilu.jpg" width="100%">
<img src="/projects/OEM/kongzhitai1.jpg" width="100%">
<img src="/projects/OEM/kongzhitai2.jpg" width="100%">

### 话术数据大屏
#### 项目介绍
1. 基于 **Vue2+ElementUI** 开发。
2. 主要用户数据的可视化展示，使用了 `Echrts` 图表开发。

#### 项目图片
<br/>
<img src="/projects/OEM/denglu.jpg" width="100%">
<img src="/projects/OEM/huashu1.png" width="100%">
<img src="/projects/OEM/huashu2.jpg" width="100%">
<img src="/projects/OEM/huashu3.jpg" width="100%">
<img src="/projects/OEM/huashu4.jpg" width="100%">
<img src="/projects/OEM/huashu5.jpg" width="100%">
<img src="/projects/OEM/huashu6.jpg" width="100%">

### 纳管中屏项目
#### 项目介绍
1. 基于 **Vue2+ElementUI** 开发。
2. 主要用与数据的展示和数据的可视化。
3. 与大屏项目不同的是，这个项目的数据量非常大，达到了亿级，因此在开发的时，无论是前端还是后端，都做了不少接口、页面的优化操作。

#### 项目图片
<br/>
<img src="/projects/zhongping/denglu.jpg" width="100%">
<img src="/projects/zhongping/kehudongcha.png" width="100%">
<img src="/projects/zhongping/celuexiazuan.jpg" width="100%">
<img src="/projects/zhongping/quanxianguanli.jpg" width="100%">
<img src="/projects/zhongping/xietongshengchan.jpg" width="100%">
<img src="/projects/zhongping/xietongzonglan.jpg" width="100%">
<img src="/projects/zhongping/yunyingshijiao.jpg" width="100%">
<img src="/projects/zhongping/zhanghaoguanli.jpg" width="100%">

### 综合演示系统
#### 项目介绍
1. 基于 **Vue2+ElementUI** 开发。
2. 纯静态页面，用于做流程的介绍和演示。

#### 项目图片
<br/>
<img src="/projects/zongheyanshi/yanshi1.jpg" width="100%">
<img src="/projects/zongheyanshi/yanshi2.jpg" width="100%">
<img src="/projects/zongheyanshi/yanshi3.jpg" width="100%">


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


