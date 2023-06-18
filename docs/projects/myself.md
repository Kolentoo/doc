# 个人项目
## 二次元番剧
### 简介

这是一个用于查阅影视、动漫、电影、小说剧集信息的微信小程序，由本人开发。<br/>
本项目只作为学习娱乐使用。<br/>
目前由于服务器到期，已经停止维护。仅作为项目记录留念。
### 图片介绍

<img src="/projects/home1.jpg" width="49%" />
<img src="/projects/home2.jpg" width="49%" />
<img src="/projects/home3.jpg" width="49%" />
<img src="/projects/anime1.jpg" width="49%" />
<img src="/projects/movie1.jpg" width="49%" />
<img src="/projects/tv1.jpg" width="49%" />
<img src="/projects/novel1.jpg" width="49%" />
<img src="/projects/novel2.jpg" width="49%" />
<img src="/projects/detail1.jpg" width="49%" />
<img src="/projects/myself.png" width="49%" />

### 内容
#### 主要包含以下内容
1.动漫（数据来源bangumi动漫网，通过爬虫每日爬取数据存入数据库）<br/>
2.电影（数据来源douban网，通过服务端转发豆瓣公开接口）<br/>
3.电视剧（数据来源douban网，通过服务端转发豆瓣公开接口）<br/>
4.小说（数据来源bangumi动漫网，通过爬虫每日爬取数据存入数据库）<br/>

### 功能介绍
1.搜索功能：通过首页的搜索栏目搜索需要找到的剧集信息。<br/>
2.筛选功能：在动漫、小说栏目可以通过时间、年份和剧集类型筛选信息。<br/>
3.评价留言功能：可以对剧集进行评论，也可以对小程序本身进行留言。<br/>
4.收藏功能：收藏自己喜爱的剧集。<br/>
5.登录功能：在个人主页点击登录，获取微信头像、名字、性别进行登录，会把新用户存储到数据库。<br/>
6.分享功能，将小程序分享给其他人。<br/>

### 技术架构
前端：微信小程序源生开发<br/>
后端：nodejs开发，主要开发一些接口（搜索查询、登录、评论留言、收藏等功能，转发一些接口）<br/>
服务端：linux<br/>
数据库：mysql（用于数据存储）<br/>
数据来源：puppetter （每日定期爬虫爬取数据存储到数据库）<br/>
