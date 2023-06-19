# VuePress
## 简介
[VuePress官方文档地址](https://vuepress.vuejs.org/zh/)<br />
由 Vue 驱动的,极简的静态网站生成器。<br />
一个 VuePress 网站是一个由 Vue、Vue Router和 webpack驱动的单页应用。<br />
#### 版本
> 本文档使用v1.x版本<br />
> **前提条件**<br />
> **v1.x版本的 VuePress 需要 Node.js (opens new window)>= 8.6**<br />
v2.x的版本目前还不稳定

## 安装
1.创建并进入一个新目录
```
mkdir vuepress-starter
d vuepress-starter
```
2.进行配置文件初始化
```
npm init
```
3.安装VuePress本地依赖<br />
目前已经不推荐进行全局安装
```
npm install -D vuepress
```
4.创建第一篇文档
```
mkdir docs
echo '# Hello VuePress'
```
5.配置`package.json`文件
* 配置运行命令和打包命令
```
{
  "scripts": {
    "dev": "vuepress dev docs",
    "build": "vuepress build docs"
  }
}
```
* 处理node17/18版本中 运行和打包的报错问题<br/>
在命令前添加对应的配置
```
{
  "scripts": {
    "dev": "set NODE_OPTIONS=--openssl-legacy-provider && vuepress dev docs",
    "build": "set NODE_OPTIONS=--openssl-legacy-provider && vuepress build docs",
  }
}

```
6.启动服务
```
npm run dev
```
**注意**<br/>
一些文档的配置，例如`.vuepress/config.js`文件中的配置，和侧边栏的显示都需要重新运行服务才能看到修改。

## 目录结构
VuePress 遵循 “约定优于配置” 的原则，推荐的目录结构如下：<br />
* 所有的静态文件需要存放在`public`文件夹下<br />
* `styles`下的样式文件都采用`stylus`的写法
```
.
├── docs
│   ├── .vuepress (可选的)
│   │   ├── components (可选的)
│   │   ├── theme (可选的)
│   │   │   └── Layout.vue
│   │   ├── public (可选的)
│   │   ├── styles (可选的)
│   │   │   ├── index.styl
│   │   │   └── palette.styl
│   │   ├── templates (可选的, 谨慎配置)
│   │   │   ├── dev.html
│   │   │   └── ssr.html
│   │   ├── config.js (可选的)
│   │   └── enhanceApp.js (可选的)
│   │ 
│   ├── README.md
│   ├── guide
│   │   └── README.md
│   └── config.md
│ 
└── package.json


```
