# HTTP

### HTTP报文
##### 1. 常用HTTP方法

| HTTP方法 | 描述                                               | 是否包含主体 |
| -------- | -------------------------------------------------- | ------------ |
| GET      | 从服务器获取一份文档                               | 否           |
| PUT      | 将请求的主体部分存储在服务器上                     | 是           |
| DELETE   | 从服务器上删除一份文档                             | 否           |
| POST     | 向服务器发送需要处理的数据                         | 是           |
| HEAD     | 只从服务器获取文档的首部                           | 否           |
| TRACE    | 对可能经过代理服务器传送到服务器上去的报文进行追踪 | 否           |
| OPTIONS  | 决定可以在服务器上执行哪些方法                     | 否           |


* `GET`
    <em>通常用于请求服务器发送某个资源。</em>
    
* `HEAD`
    <em>与GET方法行为类似，但是服务器在响应中只返回头部。</em>
* `PUT`
    <em>与GET方法相反，PUT方法会向服务器写入文档。</em>
* `POST`
    <em>起初是用来想服务器输入数据的,通常用于表单提交。</em>
* `TRACE`
    <em>客户端发起一个请求时，这个请求可能要穿过防火墙、代理、网关或其它一些应用程序。
    每个中间节点都有可能会修改原始的HTTP请求。TRACE方法允许客户端在最请求将请求发送
    给服务器时，看看它变成了什么样子。
    </em>
* `OPTIONS`
     <em>请求Web服务器告知其支持的各种功能。</em>
* `DELETE`
     <em>请服务器删除请求URL所指定的资源。</em>

`POST用于向服务器发送数据。PUT用于向服务器上的资源(例如文件)中存储数据`

##### 2. 状态码分类

| 整体范围 | 已定义范围 | 分类       |
| -------- | ---------- | ---------- |
| 100~199  | 100~101    | 信息提示   |
| 200~299  | 200~206    | 成功       |
| 300~399  | 300~305    | 重定向     |
| 400~499  | 400~415    | 客户端错误 |
| 500~599  | 500~505    | 服务器错误 |

<b>常见状态码</b>

| 状态码 | 原因短语             | 含义                               |
| ------ | -------------------- | ---------------------------------- |
| 200    | OK                   | 成功。请求的所有数据都在响应主体中 |
| 401    | Unauthorized(未授权) | 需要输入用户名和密码               |
| 404    | Not Found(未找到)    | 服务器无法找到所请求URL对应的资源  |

* 100~199 信息性状态码
* 
    | 状态码 | 原因短语            | 含义                                                                                   |
    | ------ | ------------------- | -------------------------------------------------------------------------------------- |
    | 100    | Continue            | 说明收到了请求的初始部分，请客户端继续。发送这个状态码之后，服务在收到请求之后必须响应 |
    | 101    | Switching Protocols | 说明服务器正在根据客户端的指定，将协议换成Update首部所列的协议                         |

* 200~

##### 3. 首部分类

* 通用首部
  既可以出现在请求报文中，也可以出现在响应报文中
* 请求首部
  提供更多有关请求的信息
* 响应首部
  提供更多有关响应的信息
* 实体首部
  描述主体的长度和内容
* 拓展首部
    规范中没有定义的新首部

<b>常见首部实例</b>

```
Content-Encoding: gzip
Content-Type: image/png
Date: Wed, 04 Sep 2019 08:17:04 GMT
Last-Modified: Mon, 26 Aug 2019 03:36:12 GMT
```

##### 4. 实体的主体部分



#####  过程

1. 浏览器从URL中解析出服务器的主机名；
2. 浏览器将服务器的主机名转换成服务器的IP地址；
3. 浏览器将端口号(如果有的话)从URL中解析出来；
4. 浏览器建立一条与Web服务器的TCP连接；
5. 浏览器向服务器发送一条HTTP请求报文；
6. 服务器向浏览器回送一条HTTP响应报文；
7. 关闭连接，浏览器显示文档。




##### Telnet

```html
openssl s_client -connect example.com:443
GET / HTTP/1.1
HOST:xmbank.66money.com

HTTP/1.1 200 
Server: nginx/1.8.1
Date: Wed, 04 Sep 2019 08:51:12 GMT
Content-Type: text/html
Content-Length: 1644
Connection: keep-alive
Vary: Accept-Encoding
Vary: Accept-Encoding
X-Application-Context: application
Last-Modified: Mon, 26 Aug 2019 03:36:12 GMT
Accept-Ranges: bytes
Content-Language: zh-CN

<!DOCTYPE html><html lang="en"><head><link rel="stylesheet" href="./umi.90c71ed8.css"><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="App-Config" content="fullscreen=yes,useHistoryState=yes,transition=yes"><meta content="yes" name="apple-mobile-web-app-capable"><meta content="yes" name="apple-touch-fullscreen"><meta content="telephone=no,email=no" name="format-detection"><meta name="viewport" content="user-scalable=no,initial-scale=1,maximum-scale=1,minimum-scale=1,width=device-width"><title></title><link rel="icon" href="/favicon.png" type="image/x-icon"><link href="./iconfont/iconfont.css" rel="stylesheet"><link href="./styles/animate.css" rel="stylesheet"><!--引入键盘样式文件--><link rel="stylesheet" href="https://xiaezhan.xmbankonline.com/static/resource/unzip/2019010036/keyboard.css"><script>window.routerBase = "/";</script></head><body><script src="https://xiaezhan.xmbankonline.com/static/resource/unzip/2019010036/jijin-payPassword.js"></script><!-- <script defer src="https://directbanktest.xmbankonline.com/zxbankNewCenterUat1/movieJs/jijin-payPassword.js"></script> --><script>// <!--插件样式中1rem等于10px-->
        document.querySelector('html').style.fontSize = '10px';</script><script>var titleEl = document.getElementsByTagName("title")[0];
        titleEl.addEventListener("DOMSubtreeModified", function(evt) {
          const title = document.title
          if(!!window.goldJumpAppPage){
            goldJumpAppPage.setWebViewHtmlTitle(title)
          }
        }, false);</script><div id="root"></div><script src="./umi.dbd4644f.js"></script></body></html>
```

##### Web的结构组件
   *  <b>代理</b>
    位于客户端和服务器之间的HTTP中间实体。
   *  <b>缓存</b>
    HTTP的仓库，使常用页面的副本可以保存在离客户端更近的地方。
   *  <b>网关</b>
    连接其他应用的特殊Web服务器。
   *  <b>隧道</b>
    对HTTP通信报文进行盲转发的特殊处理
   *  <b>Agent代理</b>
    发起自动HTTP请求的半智能Web客户端

超文本传输协议 https://www.ietf.org/rfc/rfc2616.pdf
