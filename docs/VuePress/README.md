# VuePress
## 简介
[VuePress官方文档地址](https://vuepress.vuejs.org/zh/)<br />
由 Vue 驱动的,极简的静态网站生成器。<br />
一个 VuePress 网站是一个由 Vue、Vue Router和 webpack驱动的单页应用。<br />
本篇文章仅记录比较常用的内容，更多内容请阅读官网文档。<br />
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

## 基本配置
通过新建配置文件来控制 `vuepress` 网站的显示和设置<br />
1.首先在docs下新建一个`.vuepress`文件夹<br />
```
.
├─ docs
│  ├─ README.md
│  └─ .vuepress
│     └─ config.js
└─ package.json
```
2.然后在`.vuepress`文件夹下新建`config.js`<br />
在这个配置文件中对网站的信息内容进行配置，内容包含 导航栏、侧边栏、图标、图片等功能。<br/>
以下是一个简单的案例<br/>
```
module.exports = {
  title: 'K o l e n t o',
  description: '前端工程师',
  // 注入到当前页面的 HTML <head> 中的标签
  head: [
    // 增加一个自定义的 favicon(网页标签的图标)
    ['link', { rel: 'icon', href: '/kolento.png' }], 
  ],
  dest: './dist', 
  // 这是部署到github相关的配置 打包的时候用这个配置,和你的github仓库相关
  // base: '/kolento2023/', 
  base: '/', //开发环境
  markdown: {
    lineNumbers: true // 代码块显示行号
  },
  themeConfig: {
    logo:'/kolento.png', //首页的logo
    sidebarDepth: 2, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
    lastUpdated: 'Last Updated', // 文档更新时间：每个文件git最后提交的时间
    // 顶部导航栏
    nav: [
      { text: '首页', link: '/' },
      { text: '学习笔记', 
          items: [
              { text: 'Vue3',  link: '/Vue3/' },
              { text: 'TypeScript', link: '/typescript/' },
              { text: 'React', link: '/VuePress/' },
          ]},
      { text: '个人简历', 
          items: [
          { text: '简历信息',  link: '/aboutme/' },
          { text: '项目经验', link: '/projects/' },
      ]},
    ],
    //侧边栏的控制
    sidebar: {
      '/typescript/': [
        '',     /* /foo/ */
        'one',  /* /foo/one.html */
        'two'   /* /foo/two.html */
      ],
      '/vue3/': [
        '',      /* /bar/ */
        'one', /* /bar/one.html */
        'two'   /* /bar/two.html */
      ],
      
    }
  }
}
```

## 部署
1.新建github仓库<br/>
2.修改 `config.js` 配置文件中的`base`字段配置,改成github的仓库名<br/>
3.通过命令打包<br/>
4.上传到github仓库<br/>
5.通过github上的设置，发布成网页。<br/>


