## 项目简介
> **官网首页：** https://www.kolento.cn (域名已过期) <br/>
> **后台管理系统：** vue2.x + ele 开发 <br/>
> **二次元番剧 小程序：** ui框架：vant webapp <br/>
> **后台支持：** node <br/>
> **数据来源：** api接口转发+puppeteer爬虫 <br/>
> **数据库：** mysql8.0.22 <br/>
> **数据库可视化软件：** dbeaver <br/>

**此笔记 主要用于记录 个人项目 的搭建的流程** <br />

## 准备工作
### 一、购买域名
**域名：** kolento.club / kolento.cn  <br/>
**到期时间：** 2021-05-31  <br/>
**购买渠道：** 百度云 / 腾讯云  <br/>
**域名备案：** （申请备案→填写信息→审核、最好上传域名证书，证书从域名购买处查找）  <br/>
**SSL证书：** http转https，现申请了腾讯云的免费一年SSL证书，2022年1月25日到期  <br/>
**申请SSL证书流程：** 申请→下载→解压找到nginx文件夹下内容复制进项目文件夹下（node项目中）  <br/>


### 二、百度云/腾讯云架设node开发环境（建议系统centos8）
**远程服务器连接工具：** xShell6 <br/>
**数据库连接工具：** dbeaver <br/>
**用户名：** root <br/>
**密码：** xxxxxx <br/>

#### 搭建node环境
```
https://nodejs.org/dist/latest/
下载nodejs（老版本）
wget https://nodejs.org/dist/v10.15.0/node-v10.15.0-linux-x64.tar.xz
如果报错
wget --no-check-certificate https://nodejs.org/dist/v10.15.0/node-v10.15.0-linux-x64.tar.xz
下载nodejs（新版本 推荐使用新版本）
wget https://nodejs.org/dist/latest/node-v15.12.0-linux-x64.tar.xz
解压与安装node
xz -d node-v15.12.0-linux-x64.tar.xz
新版本：tar -xf node-v15.12.0-linux-x64.tar
这里可以选择修改文件夹名字方便后面输入命令，修改文件夹名字为nodebox
mv node-v15.12.0-linux-x64 nodebox
映射node与npm（映射需要观察/nodebox/bin/下是否有node命令用于映射）
ln -s /nodebox/bin/node /usr/bin/node 
ln -s /nodebox/bin/npm /usr/bin/npm
安装淘宝镜像，然后进行映射
ln -s /nodebox/bin/cnpm /usr/bin/cnpm
如果成功，则测试是否安装成功检测版本号
node -v
npm -v
如果不成功，删除原有映射，重新映射尝试
进入需要删除的映射文件夹
cd /usr/bin
rm -rf ./node (删除node映射为例)
下载解压yum并且安装 用于安装其他软件
wget http://yum.baseurl.org/download/3.2/yum-3.2.28.tar.gz
tar xvf yum-3.2.28.tar.gz 
进入目录运行安装
cd yum-3.2.28  
安装git和pm2
yum install git
yum install pm2
如果yum安装不成功使用npm安装
npm install -g  pm2
如果pm2显示没不存在命令
执行映射 
ln -s /nodebox/bin/pm2 /usr/bin/pm2
pm2开命令：
全部停止：pm2 stop all
全部开启：pm2 start all
显示pm2列表：pm2 list
参考链接（可用）
https://blog.csdn.net/putao2062/article/details/79647597
```

### 三、服务器安装mysql8.0
> 如果使用的是cenos7版本会在安装的时候提示缺包，不能安装此版本 <br />
> centos8安装mysql8.0.22，在kolento目录下的mysql8.0目录下进行
```
1.下载
wget https://dev.mysql.com/get/mysql80-community-release-el8-1.noarch.rpm
2.安装数据源
yum install mysql80-community-release-el8-1.noarch.rpm
3.检查数据源、查看mysql源是否安装成功：
yum repolist enabled | grep "mysql.*-community.*"
4.禁用CentOS8自带mysql模块
yum module disable mysql
5.安装数据库、真正安装mysql
安装语句：yum install mysql-community-server
6.启动数据库
service mysqld start
service mysqld status
7.显示mysql的随机密码
grep 'temporary password' /var/log/mysqld.log
此时会显示出当前生成的随机密码用这个密码登录后再次修改为简单的密码

8.登录并且修改mysql密码
登录：mysql -u root -p
然后输入上面生成的密码
9.修改密码
ALTER USER 'root'@'localhost' IDENTIFIED BY 'Root_21root';（设置密码 Root_21root）
ssh服务器上登录密码：Root_21root
10.查看密码策略
SHOW VARIABLES LIKE 'validate_password%';
11.修改密码策略
 修改密码长度：set global validate_password.length=1;（长度）
修改密码等级：set global validate_password.policy=0;（等级）
并且再次进行查看确认是否修改成功
12.Mysql8.0.22开放远程访问
先创建权限记录：create user 'root'@'%' identified by 'root123';
13.设置自己的密码
ALTER USER 'root'@'%' IDENTIFIED BY '123456';
原文中%为local，应改成%，否则node连不上远程数据库
授权：grant all privileges on *.* to 'root'@'%' with grant option;
14.开放防火墙端口
由于mysql8.0的加密方法变了。mysql8.0默认采用caching_sha2_password的加密方式。sqlyog不支持这种加密方式。
修改密码过期
ALTER USER'root'@'%' IDENTIFIED BY '123456' PASSWORD EXPIRE NEVER;
重新修改密码
ALTER USER'root'@'%' IDENTIFIED WITH mysql_native_password BY '123456';
刷新权限（不做可能无法生效）
FLUSH PRIVILEGES;
参考地址：https://www.cnblogs.com/zhulei2/p/13912167.html
登录本机mysql：mysql -uroot -p
停止mysql服务：service mysqld stop
开启mysql服务：service mysqld start
```

## node项目配置与开发
1. 开发**api.js** <br />
用于爬虫爬取所需数据并且存入数据库（puppeteer）每日定时执行,爬取最新信息。

2. 开发**serve.js** <br />
建立数据库连接，开发接口，转发接口，允许跨域
```js
var mysql = require('mysql');
var db = mysql.createConnection({
  host     : '106.12.xx.xx',
  user     : 'root',
  password : 'xxxxxx',
  port     : 3306,
  database : 'kolento'
});
```
并且引入静态资源
```js
app.use(express.static('./public'));
```
读取**public**文件下的**index.html**使得网站可以被访问 <br />
3. SSL证书配置与**start.js**开发
**public** 文件夹下放入下载的证书和打包好的网页文件 <br />
引入相关文件，导入**serve.js**中暴露的**app**并且开启**https**服务 <br />
```js
const httpsOption = {
    key : fs.readFileSync("./public/SSL/Nginx/2_kolento.club.key"),
    cert: fs.readFileSync("./public/SSL/Nginx/1_kolento.club_bundle.crt")
}
```

创建服务，默认80端口
```js
http.createServer(app).listen(80);
https默认443端口
https.createServer(httpsOption, app).listen(443);
```
本地运行 `node start` 测试是否成功

## 开启node服务
1. 在根目录创建文件夹 `mkdir kolento` <br />
**kolento** 下创建2个文件夹一个 **node20201** 用于存放项目、一个 **mysql8.0** 用于放置 **mysql** <br />
```
https://github.com/xxxxxx/node2021.git
开始拉取安装已开发打包的项目
cd node2021
git init 初始化仓库
git pull https://github.com/xxxxxx/node2021.git
安装淘宝镜像
npm install -g cnpm --registry=https://registry.npm.taobao.org
cnpm install
node start 尝试启动start.js查看是否可以正常运行
使用pm2永久开启服务
需要开启服务的js文件：start.js
pm2 start start.js
查看pm2服务列表：
pm2 list
pm2 stop all
pm2 start all
```

## 问题总结
* 主要是 **puppetter**和**linux**相关问题 <br />
1. async外不要使用console <br />
2. 不渲染chrome浏览器，linux没有图形化组件 <br />
```js
const browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
      // puppeteerOptions: {
      //   ignoreHTTPSErrors: true,
      //   dumpio: false,
});
```
3. 安装相关puppeteer在linux下的依赖
#### 依赖库
```
yum install pango.x86_64 libXcomposite.x86_64 libXcursor.x86_64 libXdamage.x86_64 libXext.x86_64 libXi.x86_64 libXtst.x86_64 cups-libs.x86_64 libXScrnSaver.x86_64 libXrandr.x86_64 GConf2.x86_64 alsa-lib.x86_64 atk.x86_64 gtk3.x86_64 -y
```
#### 字体库
```
yum install ipa-gothic-fonts xorg-x11-fonts-100dpi xorg-x11-fonts-75dpi xorg-x11-utils xorg-x11-fonts-cyrillic xorg-x11-fonts-Type1 xorg-x11-fonts-misc -y
```
其中`ipa-gothic-fonts`需要手动下载安装
4. 如果提示缺少组件按照缺少的组件进行安装
```
(node:201386) ExperimentalWarning: The fs.promises API is experimental

(node:201386) UnhandledPromiseRejectionWarning: Error: Failed to launch the browser process!

/kolento/node2021/node_modules/_puppeteer@5.5.0@puppeteer/.local-chromium/linux-818858/chrome-linux/chrome: error while loading shared libraries: libgbm.so.1: cannot open shared object file: No such file or directory
```
#### 解决方案
```
yum install libgbm  -y
```

## 其他问题
1. 如何进行ip动态代理更换提高爬虫的效率（付费代理池）<br />
2. Error: Node is either not visible or not an HTMLElement<br />
#### 解决方案：
添加登录的模拟操作步骤 <br />
```js
await page.waitForSelector('.more:not(:empty)', { timeout: 120000 },{ visible: true });
```
本机调用爬虫，不在服务端进行running

## CDN资源管理
* 信息均已过期
腾讯云cdn 3元/50g <br />
购买日期：2月5日，过期时间22年2月5日 <br />
https://console.cloud.tencent.com/ <br />

腾讯云控制台子用户登录页面： <br />
https://cloud.tencent.com/login/subAccount/100003948444?type=subAccount <br />


## 云服务器
**有效日期：** 2021/319--2023/3/19 <br />

## 公安备案
* 信息均已过期
**备案地址：** [备案地址](http://www.beian.gov.cn/portal/index?login=Y&token=f77071a7-08b4-489d-bb75-6e64a3094449&info=%E6%B3%A8%E5%86%8C%E6%88%90%E5%8A%9F%EF%BC%81) <br />

 

## 开发工作
#### 小程序 注意的问题
1. ios不支持webp格式的图片 <br />
2. wxml中调用js或者写表达式的方法  <br />
3. 后台设置中bangumi https和ic备案问题 <br />













