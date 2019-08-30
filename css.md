
#####  CSS选择器
```css
1.1 常用选择器
/* 元素选择器(简单选择器)  */
p {color:black;}
/* ID选择器 */
#intro{font-weight:bold;}
/* 类选择器 */
.date-posted{color:#ccc;}
 /* 伪类 */
a:link{color:blue}

1.2 通用选择器;
*{
    padding:0;
    margin:0;    
}
1.3 高级选择器

1.3.1 子选择器和相邻选择器(IE7+)
/* 子选择器 (只选择元素的直接后代，即子元素。) */
#nav>li{ background:url(folder.png);}
/* IE6及以下 */
#nav li { background:url(folder.png); }
#nav li * { background-image:none; }

/* 相邻选择器 (用于定位同一个父元素下某个元素之后的元素。) */
h2 + p{ font-size:1.4em; }

1.3.2 属性选择器
/* <ul class="blogroll">
     <li> <a href="#" rel="friend met colleague co-worker">
     Jeremy Keith</a></li>
     <li><a href="#">Jeremy Keith2</a></li>
</ul> */
.blogroll a[rel~="co-worker"] { background-color: green; }

1.3.3 层叠和特殊性
重要度次序：
*标有!important的用户样式。
*标有!important的作者样式。
*作者样式。
*用户样式。
*浏览器/用户代理应用的样式。

(1).特殊性
选择器的特殊性分成4个成分等级:a、b、c和d。
*如果样式是行内样式，那么a = 1;
*b等于ID选择器的总数。
*c等于类、伪类和属性选择器的数量。
*d等于类型选择器和伪类元素选择器的数量。

选择器                             优先级
style=""                           1000
#wrapper #content {}               0200
#content .datePosted{}             0110
div#content{}                      0101   
#content{}                         0100      
p.comment .dateposted {}           0021  
p.comment {}                       0011  
div p {}                           0002
p {}                               0001

1.3.4 继承
p,div,h1.h2...{color:block;}
以下写法更简单：
body{color:black;}

1.4 规划、组织和维护样式表

1.4.1 对文档应用的样式
<link href="/css/basic.css" rel="stylesheet" type="text/css" />

/* basic.css */
@import url(/css/layout.css);
@import url(/css/color.css);

```
##### 可视化格式模型
```css
* 盒模型的复杂性和特点
* 如何以及为什么使用外边距叠加
* 绝对定位和相对定位之间的差异
* 浮动和清理是如何工作的

3.1 盒模型概述
  
3.1.1 IE和盒模型
box-sizing: content-box | border-box;

W3C盒子模型：设置元素的 height/width 属性指的是 content 部分的高/宽
 IE盒子模型：设置元素的 height/width 属性指的是 content + border + padding 部分的高/宽
3.2 定位概述
* 相对定位 relative
* 绝对定位 absolute
* 固定定位 fixed
3.2.4 浮动
清除浮动的方式：
  * 投机取巧法
  <div style="clear:both;"></div>
  * overflow + zoom方法
  .fix{overflow:hidden;zoom:1;}
  * after + zoom方法
    .fix{zoom:1;}
    .fix:after{display:block; content:'clear'; clear:both; line-height:0; visibility:hidden;}

/* <div style="border: 4px solid blue;overflow: hidden;"><!-- BFC -->
  <div style="float: left;border:4px solid red;">我是浮动元素1</div>
  <div style="float: left;border:4px solid yellow;"">我是浮动元素1</div>
  <!-- <br clear="all"/> -->
  <!-- <div style="clear: both"></div> -->
</div>
<div style=" border: 4px solid gray;clear: left">我是页脚</div> */
```
##### BFC 规范

    * 内部的 Box 会在垂直方向上一个接一个放置。
    * Box 垂直方向的距离由 margin 决定，属于同一个 BFC 的两个相邻 Box 的 margin 会发生重叠。
    * 每个元素的 margin box 的左边，与包含块 border box 的左边相接触。
    * BFC 的区域不会与 float box 重叠。
    * BFC 是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。
    * 计算 BFC 的高度时，浮动元素也会参与计算。满足下列条件之一就可触发 BFC根元素，即 htmlfloat 的值不为none（默认）overflow 的值不为 visible（默认）display 的值为 inline-block、table-cell、table-captionposition 的值为 absolute 或 fixed

