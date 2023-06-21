module.exports = {
  title: 'K o l e n t o',
  description: '前端工程师',
  // 注入到当前页面的 HTML <head> 中的标签
  head: [
    ['link', { rel: 'icon', href: '/kolento.png' }], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  dest: './dist', 
  // base: '/kolento2023/', // 这是部署到github相关的配置 打包的时候用这个配置
  base: '/', //开发环境
  markdown: {
    lineNumbers: true // 代码块显示行号
  },
  themeConfig: {
    logo:'/kolento.png',
    sidebarDepth: 2, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
    lastUpdated: 'Last Updated', // 文档更新时间：每个文件git最后提交的时间
    nav: [
      { text: '首页', link: '/' },
      { text: '学习笔记', 
          items: [
              { text: 'Vue3',  link: '/Vue3/' },
              { text: 'TypeScript', link: '/typescript/' },
              // { text: 'React', link: '/VuePress/' },
              // { text: '微信小程序', link: '/VuePress/' },
              // { text: 'JavaScript', link: '/VuePress/' },
              // { text: 'ES6', link: '/VuePress/' },
              { text: 'VuePress', link: '/VuePress/' },
              { text: 'MarkDown', link: '/markdown/' },
              { text: 'Kplayer', link: '/kplayer/' }
          ]},
      { text: '个人简历', 
          items: [
          { text: '简历信息',  link: '/aboutme/' },
          { text: '项目经验', link: '/projects/' },
          { text: '个人项目', link: '/myprojects/' },
      ]},
      { text: '生活记录', 
        items: [
          { text: '生活点滴',  link: '/life/' },
          { text: '旅行记录',  link: '/travel/' },
          { text: '大事件', link: '/important/' },
      ]},
      { text: '动漫游戏', 
        items: [
        { text: '我的B站',  link: 'https://space.bilibili.com/601185?spm_id_from=333.788.0.0' },
        { text: '动漫解说', link: '/comments/' },
        { text: '游戏记录', link: '/games/' },
        { text: '直播间', link: 'https://live.bilibili.com/748068?broadcast_type=0&is_room_feed=1&spm_id_from=333.999.live_users_card.0.click&live_from=86001' },
      ]},
      { text: '24小时直播间', link: 'https://live.bilibili.com/748068?broadcast_type=0&is_room_feed=1&spm_id_from=333.999.live_users_card.0.click&live_from=86001' },
    ],
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
      '/aboutme/': [
        '',     /* /foo/ */
      ],
      '/projects/': [
        '',      /* /bar/ */
      ],
      '/myprojects/': [
        '',      /* /bar/ */
      ],
      '/comments/': [
        '',      /* /bar/ */
        'summer', /* /bar/summer.html */
        'reset'   /* /bar/reset.html */
      ],
      '/games/': [
        '',      /* /bar/ */
      ],
      '/VuePress/': [
        '',      /* /bar/ */
      ],
      '/markdown/': [
        '',      /* /bar/ */
      ],
      '/kplayer/': [
        '',      /* /bar/ */
      ],
      '/life/': [
        '',      /* /bar/ */
      ],
      '/travel/': [
        '',      /* /bar/ */
      ],
      '/important/': [
        '',      /* /bar/ */
      ],
      
    }
  }
}