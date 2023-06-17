# 安装与编译
## 简介
#### 学习文档链接
[TypeScript官方文档](https://www.tslang.cn/docs/release-notes/typescript-3.1.html)<br />
[TypeScript在线文档 非官方文档](http://ts.xcatliu.com/)
#### 文档笔记的ts版本
`Version 5.1.3`
#### TypeScript的作用
1.更加严格的语法，进行类型检测，减少运行时bug产生的概率。<br />
2.开发大型项目，更便于后期维护。
#### TypeScript与JavaScript的关系
1.ts需要编译为js代码后才能被浏览器执行<br />
2.ts完全兼容js代码

## 安装
```
//全局安装
npm install -g typescript
//检查版本号
tsc -v
```

## 编译
#### 手动编译
```
tsc 文件名
```

#### vscode自动编译
1.通过命令初始化生成 ts 配置文件，命令执行结束后会生成一个 tsconfig.json 文件<br />
```
tsc --init
```
2.修改tsconfig.json配置项
* 修改编译后的js文件输出路径
```
"outDir": "./"
```
* 编译后的语法
```
"target": "es2016",
```
* 是否启用严格模式
```
"strict": true,  
```
3.配置 vscode 自动编译<br />
* vscode菜单→运行任务→显示所有任务→tsc监视
