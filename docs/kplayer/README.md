# Kplayer
## 简介
用于服务端进行直播推流的工具。<br/>
[官网地址](https://docs.kplayer.net/v0.5.8/)

#### 服务端推流
需要准备的工具：kplayer + 云服务器linux

## 部署与安装
1.登录连接服务器
2.下载工具
```
wget http://download.bytelang.cn/kplayer-v0.5.6-linux_amd64.tar.gz
```
3.解压
```
tar zxvf kplayer-v0.5.6-linux_amd64.tar.gz
```
4.进入kplayer文件夹内 复制里面的json文件
```
cp config.json.example config.json
```
5.修改刚才复制的json文件为如下内容
```
{
    "version": "2.0.0",
    "resource": {
        "lists": [
            "/video/example_1.mp4"        ]
    },
    "output": {
        "lists": [
            {
                "path": "服务器地址+串流密钥"
            }
        ]
    }
}
```
6.去b站直播中心 点击开始直播开启直播
7.启动kplayer服务
```
// 开启服务命令
./kplayer play start
sudo ./kplayer play start --daemon

// 关闭服务命令
./kplayer play stop
sudo ./kplayer play stop
```
7.文件缓存
```
// 在不开启推流的情况下进行文件缓存操作
./kplayer play start -g
```

#### 备注
b站推流地址：服务器地址 + 串流密钥

## 弹幕姬
### 部署
1.在github下载linux版本的弹幕姬<br/>
2.上传到服务器<br/>
3.解压后启动命令部署<br/>
```
//启动命令
java -jar BiliBili_Danmuji-2.6.4beta.jar
nohup java -jar BiliBili_Danmuji-2.6.4beta.jar >/dev/null &
```
4.打开服务器23333端口<br/>
在网页端进行设置
http://101.132.73.35:23333/





