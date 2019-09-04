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

* 100~199 —— 信息性状态码
* 
    | 状态码 | 原因短语            | 含义                                                                                   |
    | ------ | ------------------- | -------------------------------------------------------------------------------------- |
    | 100    | Continue            | 说明收到了请求的初始部分，请客户端继续。发送这个状态码之后，服务在收到请求之后必须响应 |
    | 101    | Switching Protocols | 说明服务器正在根据客户端的指定，将协议换成Update首部所列的协议                         |

* 200~299 —— 成功状态码
  
  | 状态码 | 原因短语                      | 含义                                                                                                         |
  | ------ | ----------------------------- | ------------------------------------------------------------------------------------------------------------ |
  | 200    | OK                            | 请求没有问题                                                                                                 |
  | 201    | Created                       | 用于创建服务器对象的请求（比如，PUT）                                                                        |
  | 202    | Accepted                      | 请求已被接收，但服务器还未对其执行任何操作                                                                   |
  | 203    | Non-Authoritative Information |
  | 204    | No Content                    | 响应报文只包含若干首部和一个状态行，没有实体的主体部分。                                                     |
  | 205    | Reset Content                 | 负责告知浏览器清楚当前页面中的所有HTML表单元素。                                                             |
  | 206    | Partial Content               | 成功执行了一个部分获取Range（范围）。请求响应中必须包含Content-Range、Date以及ETag、或者Content-Location首部 |

* 300~399 —— 重定向状态码  
    客户端发送一个特殊的IF-Modified-Since首部，说明只读取指定日期修改过后的文档，如果文档没有被修改过，服务器会返回一个304状态码。

    | 状态码 | 原因短语           | 含义                                                                     |
    | ------ | ------------------ | ------------------------------------------------------------------------ |
    | 300    | MUltiple Choices   | 客户端请求一个实际执行多个资源的URL时会返回这个状态码。                  |
    | 301    | Moved Permanently  | 请求的URL已被移除时使用。                                                |
    | 302    | Found              | 与301状态码类似；但是客户端应该使用Location首部给出的URL来临时定位资源。 |
    | 303    | See Other          | 告知客户端应该用另一个URL来获取资源                                      |
    | 304    | Not Modifed        | 客户端可以通过请求首部，使请求添加条件。                                 |
    | 305    | User Proxy         | 用来说明必须通过一个代理来访问资源                                       |
    | 306    | 未使用             | 当前未使用                                                               |
    | 307    | Temporary Redirect | 与301状态码类似；单客户端应该使用Location首部给出的URL来临时定位资源     |

 * 400~499 —— 客户端错误状态码
  
     | 状态码 | 原因短语                        | 含义             |
     | ------ | ------------------------------- | ---------------- |
     | 400    | Bad Request                     | 错误的请求       |
     | 401    | Unauthorized                    | 未验证           |
     | 402    | Payment Required                | 状态码还没使用   |
     | 403    | Forbidden                       | 请求被服务器拒绝 |
     | 404    | Not Found                       | 资源找不到       |
     | 405    | Method Not Allowed              |
     | 406    | Not Acceptable                  |
     | 407    | Proxy Authentication            |
     | 408    | Request Timeout                 |
     | 409    | Confict                         |
     | 410    | Gone                            |
     | 411    | Length Required                 |
     | 412    | Precondition Failed             |
     | 413    | Request Entity Too Large        |
     | 414    | Request URI Too Long            |
     | 415    | Unsupported Media Type          |
     | 416    | Requested Range Not Satisfiable |
     | 417    | Expectation Failed              |

  * 500~599 —— 服务器错误状态码
  
     | 状态码 | 原因短语                   | 含义                                     |
     | ------ | -------------------------- | ---------------------------------------- |
     | 500    | Internal Server Error      | 服务器遇到一个方案它为请求提供服务的错误 |
     | 501    | Not Implemented            |
     | 502    | Bad Gateway                |
     | 503    | Service Unavailable        |
     | 504    | Gateway Timeout            |
     | 505    | HTTP Version Not Supported |

##### 3. 首部分类

* 通用首部
  既可以出现在请求报文中，也可以出现在响应报文中

  <b>通用信息性首部</b>

  | 首部              | 描述                                                       |
  | ----------------- | ---------------------------------------------------------- |
  | Connection        | 允许客户端和服务器指定与请求/响应有关的选项                |
  | Date              | 提供日期和时间标志，说明报文是什么时间创建的               |
  | MIME-Version      | 给出了发送端使用的MIME版本                                 |
  | Trailer           |
  | Transfer-Encoding | 告知接收端为了保证报文的可靠传输，对报文采用了什么编码方式 |
  | Update            |
  | Via               | 显示了报文经过的中间节点(代理、网关)                       |
  
  <b>通用缓存首部</b>

    | 首部          | 描述                       |
    | ------------- | -------------------------- |
    | Cache-Control | 用于随报文传送缓存指示     |
    | Pragma        | 另一种随报文传送指示的方式 |


* 请求首部
  
  提供更多有关请求的信息

  <b>请求的信息性首部</b>
  
    | 首部       | 描述                                   |
    | ---------- | -------------------------------------- |
    | Client-IP  | 提供了运行客户端的机器的IP地址         |
    | From       | 另一种随报文传送指示的方式             |
    | HOST       | 给出了接收请求的服务器的主机名和端口号 |
    | Referer    | 提供了包含当前请求URI的文档的URL       |
    | UA-Color   |
    | UA-CPU     |
    | UA-Disp    |
    | UA-OS      |
    | UA-Pixels  |
    | User-Agent | 将发起请求的应用程序名称告知服务器     |

    1. Accept 首部
   
     | 首部            | 描述                           |
     | --------------- | ------------------------------ |
     | Accept          | 告诉服务器能够发送哪些媒体类型 |
     | Accept-Charset  |
     | Accept-Encoding |
     | Accept-Language |
     | TE              |

    2. 条件请求首部
     
     | 首部                | 描述                                                       |
     | ------------------- | ---------------------------------------------------------- |
     | Expect              | 运行客户端列出某请求所需要的服务器行为                     |
     | If-Match            |
     | If-Modified-Since   | 除非在某个指定的日期后资源被修改过，否则就限制这个请求     |
     | If-None-Match       |
     | If-Range            |
     | If-Unmodified-Since | 除非在某个指定的日期后资源没有被修改过，否则就限制这个请求 |
     | Range               |

    3. 安全请求首部
   
     | 首部          | 描述                                                 |
     | ------------- | ---------------------------------------------------- |
     | Authorization | 包含了客户端提供给服务器，以便对其自身进行认证的数据 |
     | Cookie        | 客户端用它向服务器传送一个令牌                       |
     | Cookie2       |
    
    4. 代理请求首部
   
    | 首部                | 描述                                                                                |
    | ------------------- | ----------------------------------------------------------------------------------- |
    | Max-Forward         | 在通往源端服务器的路径上，将请求转发给其他代理或网关的最大次数(与TRACE方法一同使用) |
    | Proxy-Authorization | 客户端用它向服务器传送一个令牌                                                      |
    | Proxy-Connection    | 与Connection首部相同，但是这个首部是在于代理建立连接时使用                          |

* 响应首部
  
  提供更多有关响应的信息

  响应的信息性首部

  | 首部        | 描述                           |
  | ----------- | ------------------------------ |
  | Age         | 从最初创建开始，响应持续时间   |
  | Public      |
  | Retry-After |
  | Server      | 服务器应用程序软件的名称和版本 |
  | Title       |
  | Warning     |

  1. 协商首部
   
  | 首部          | 描述                                 |
  | ------------- | ------------------------------------ |
  | Accept-Ranges | 对此资源来说，服务器可接受的范围类型 |
  | Vary          |

   2. 安全响应首部
   
   | 首部               | 描述                                               |
   | ------------------ | -------------------------------------------------- |
   | Proxy-Authenticate | 来自代理的对客户端的质询列表                       |
   | Set-Cookie         | 可在客户端设置一个令牌，以便服务器对客户端进行标识 |
   | Set-Cookie2        |
   | WWW-Authenticate   | 来着服务器对客户端的质询列表                       |

* 实体首部
 
  描述主体的长度和内容

   实体的信息性首部

  | 首部     | 描述                                                           |
  | -------- | -------------------------------------------------------------- |
  | Allow    | 列出了可以对实体执行的请求                                     |
  | Location | 告知客户端实体实际上位于何处；用于将接收端定向到资源的位置上去 |

  1. 内容首部
   
     | 首部             | 描述               |
     | ---------------- | ------------------ |
     | Content-Base     |
     | Content-Encoding |
     | Content-Language |
     | Content-Length   | 主体的长度或者尺寸 |
     | Content-Location | 资源实际所处位置   |
     | Content-MD5      | 主体的MD5校验和    |
     | Content-Range    |
     | Content-Type     | 这个主体的对象类型 |

  2. 实体缓存首部
   
    | 首部          | 描述                                                   |
    | ------------- | ------------------------------------------------------ |
    | ETag          | 与此实体相关的实体标记                                 |
    | Expires       | 实体不再有效，要从原始的源端再次获取此实体的日期和时间 |
    | Last-Modified | 这个实体最后一次被修改的日期和时间                     |

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
