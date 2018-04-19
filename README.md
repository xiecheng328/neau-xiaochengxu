# neau-xiaochengxu

# 大赛的通知
* 报名地址：  http://edu.weixin.qq.com/contest
# github
![image](https://github.com/xiecheng328/md-img/blob/master/git.png?raw=true)
* github:代码管理的一个网站
* git：代码管理工具
* 大家需要注册一个github网站的账号
* 代码地址： https://github.com/xiecheng328/neau-xiaochengxu.git
* 下载代码：phpstorm->check out from version control -> git -> 填写相应的url下载代码
* 提交代码：vcs -> commit -> 勾选提交的文件，填写注释
* 只有第一次需要checkeout，以后每次更新只需要vcs -> update就可以更新代码了
# phpstorm
* 开发工具
* windows电脑上面，需要安装git.exe,
点击phpstorm首页的configure->左上角搜索git，点击git，右边点击三个点，关联git/bin/git.exe,
点击test，如果提示成功，说明phpstorm已经和git配置好了
# 微信小程序的注册
* 注册地址：https://mp.weixin.qq.com/ ， 团队注册一个就可以，信息登记中主体选择：个人
* 登录：填入相应的用户名和密码，微信扫描二维码
* 用户身份：可以添加相应的开发成员并分配权限
* 设置 -> 开发者工具 -> 开通腾讯云
* 开发工具下载： https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html?t=2018413
* 打开开发工具，创建小程序项目，选择项目路径，填入AppID,模板选择：建立腾讯云PHP启动模板，点击确定
* 项目路径： client 客户端， server 服务端
# 前后端技术栈
![image](https://github.com/xiecheng328/md-img/blob/master/fe-be.png?raw=true) 
    
```
20180418今天的任务：
1. 三个同学组队，讨论题目
2. 注册微信小程序开发账号
3. 下载并安装小程序开发工具
4. 把老师代码下载到本地
5. 阅读小程序开发官网手册
6. 注册github账号
```    


# 小程序前端开发
## 程序配置
* 开通腾讯云  设置 -> 开发者工具 -> 开通腾讯云
* client/config.js -> host(详情->腾讯云状态->开发环境 request 域名)
* server/config.php -> appId、pass（默认为appId）
* html->wxml（内容）
* css->wxss（样式）
* javascript->js(交互)
* 每个页面对应pages文件夹的一个文件夹，每个文件夹下面有四个文件:.wxml、.wxss、.js、.json(不是必须的)
* client/app.json 中配置关于宽口等信息，通过tabBar配置页面tab信息，其中`pagePath`一定要在pages中配置过
```
"tabBar": {
    "color": "#696969",
    "selectedColor": "#f03d37",
    "backgroundColor": "#fff",
    "list": [
      {
        "text": "首页",
        "pagePath": "pages/index/index",
        "iconPath": "images/home.png",
        "selectedIconPath": "images/home-actived.png"
      },
      {
        "text": "搜索",
        "pagePath": "pages/search/search",
        "iconPath": "images/search.png",
        "selectedIconPath": "images/search-actived.png"
      },
      {
        "text": "我的",
        "pagePath": "pages/mine/mine",
        "iconPath": "images/profile.png",
        "selectedIconPath": "images/profile-actived.png"
      }
    ]
  }

```

```
20180419今天的任务：
1. 熟悉小程序前端开发流程，把小程序前端页面的tab配置好
2、根据w3school手册自学html、css、javascript基础知识
```    

    
