# Vue3 开始
## 官方地址
[vue3官方文档](https://cn.vuejs.org/guide/introduction.html) <br />
[vite官方文档](https://cn.vitejs.dev/) <br />
[typeScript使用指南](https://cn.vuejs.org/guide/typescript/overview.html)
* Vue3兼容Vue2的语法<br />
## 安装
> **前提条件** <br />
> 已安装 16.0 或更高版本的 Node.js<br />
### VITE
是一个web开发构建工具，由于其原生ES模块导入方式，可以实现闪电般的冷服务器启动。比CLI脚手架的方式，少很多配置文件和依赖，速度更快。<br/>
创建的项目将使用基于 Vite 的构建设置

```

// 安装命令
npm init vue@latest
cd init
npm install
npm run dev
// 打包命令
npm run build
```
此命令会在 **./dist** 文件夹中为你的应用创建一个生产环境的构建版本。
#### 版本
我这里安装的版本是 `vue3.3.4`
```json
{
  "name": "init",
  "version": "0.0.0",
  "private": true,
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "vue": "^3.3.4",
    "vue-router": "^4.2.2"
  },
  "devDependencies": {
    "@vitejs/plugin-vue": "^4.2.3",
    "vite": "^4.3.9"
  }
}
```


#### 配置推荐
* 推荐的配置是 `Visual Studio Code + Volar` 扩展。