<!-- <span style="font-size:0.8em"> -->
# 前端开发面试题
## CSS
----
### 1. CSS选择器
##### 类型
```css
/* 元素选择器(简单选择器)  */
p {color:black;}

/* ID选择器 */
#intro{font-weight:bold;}

/* 类选择器 */
.date-posted{color:#ccc;}

 /* 伪类 */
a:link{color:blue}

/* 通用选择器; */
*{ padding:0; margin:0; }

/* 子选择器 (只选择元素的直接后代，即子元素。) */
#nav>li{ background:url(folder.png);}
/* IE6及以下 */
#nav li { background:url(folder.png); }
#nav li * { background-image:none; }

/* 相邻选择器 (用于定位同一个父元素下某个元素之后的元素。) */
h2 + p{ font-size:1.4em; }

/*属性选择器 */
/* <ul class="blogroll">
     <li> <a href="#" rel="friend met colleague co-worker">
     Jeremy Keith</a></li>
     <li><a href="#">Jeremy Keith2</a></li>
</ul> */
.blogroll a[rel~="co-worker"] { background-color: green; }
```
##### 继承性
    可被继承的样式
       - 字体系列属性： font-size, font-family, font-weight, font-style, ...
       - 文本系列属性： text-align, text-indent, line-height, color, direction, ...
       - 元素可见性：   visibility
       - 表格布局属性:  caption-side, border-colapse, empty-cells, 
       - 列表属性：     list-style-type  
    不可继承的样式：display, border, padding, margin, width, height, ...
    
##### 优先级
    (就近原则)：!important > 内联 > [ id > class > tag ] 
    选择器的特殊性分成4个成分等级:a、b、c和d。
    * 如果样式是行内样式，那么a = 1;
    * b等于ID选择器的总数。
    * c等于类、伪类和属性选择器的数量。
    * d等于类型选择器和伪类元素选择器的数量。
    示例：
    style=""                           1000
    #wrapper #content {}               0200
    #content .datePosted{}             0110
    div#content{}                      0101   
    #content{}                         0100      
    p.comment .dateposted {}           0021  
    p.comment {}                       0011  
    div p {}                           0002
    p {}                               0001
</span>

### 2. 可视化格式模型
##### 盒子模型
```css
用来控制元素的盒子模型的解析模式，默认为content-box
box-sizing: content-box | border-box;
W3C盒子模型：设置元素的 height/width 属性指的是 content 部分的高/宽
低版本IE盒子模型：设置元素的 height/width 属性指的是 content + border + padding 部分的高/宽
```
##### 块级盒子与内联盒
<span style="font-size:0.8em">
<b>块级盒子</b>：块级元素生成的盒子便是块级盒子（如ul,li,p,div...），该类型盒子参与BFC<br>
<b>内联盒</b>：由inline元素生成的盒子为内联盒，内联盒只能包含文本内容，且无法设置高度，高度由line-height决定
</span><br>

##### 定位方案

<span style="font-size:0.8em">
1、<b>常规流向</b>。CSS2中，常规流向包含块框的块格式化，行内框的行内格式化，块框或行内框的相对定位，以及压缩和插入框的定位。
<br>
2、<b>浮动</b>。在浮动模型中，一个框首先根据常规流向布局，再将它从流中取出并尽可能地向左或向右偏移。内容可以排列在一个浮动的边上。
 <br>
3、<b>绝对定位</b>。在绝对定位模型中，一个框整个地从常规流向中脱离（它对后续的同胞没有影响），并根据一个包含块来分配其定位。
</span>
<br>
<b  style="font-size:1.2em">positon</b><br>
<em>static(初始值) | relative | absolute | fixed | sticky | inherit</em><br>
<b>`static`</b><br>
    常规控制框，布局根据常规流向。“left”和'top'属性不适用
<b>`relative`</b><br>
    框的位置根据常规流向计算（被称为常规流向中的位置）。然后框相对于它的常规位置而偏移。如果B框是相对定位的，接下去的框的定位计算并不考虑B的偏移。<br>
    
<b>`absolute`</b><br>
    框的位置（可能还有它的尺寸）是由'left'，'right'，'top'和'bottom'属性决定。这些属性指定了基于框的包含块的偏移。绝对定位的框从常规流向中脱离。这意味着它们对其后的同胞的定位没有影响。同样的，尽管绝对定位框有边距，它们不会和其它边距发生重合（塌缩）。
| 值       | 描述                                                                                                                                 |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| absolute | 生成绝对定位的元素，相对于 static 定位以外的第一个父元素进行定位。元素的位置通过 "left", "top", "right" 以及 "bottom" 属性进行规定。 |
| fixed    | 生成固定定位的元素，相对于浏览器窗口进行定位。（老IE不支持）元素的位置通过 "left", "top", "right" 以及 "bottom" 属性进行规定。       |
| relative | 生成相对定位的元素，相对于其正常位置进行定位，不脱离文档流。因此，"left:20" 会向元素的 LEFT 位置添加 20 像素。                       |
| static   | 默认值。没有定位，元素出现在正常的文档流中（忽略 top, bottom, left, right 或者 z-index 声明）。                                      |
| inherit  | 规定应该从父元素继承 position 属性的值。                                                                                             |
| sticky   | 粘性定位可以被认为是相对定位和固定定位的混合。元素在跨越特定阈值前为相对定位，之后为固定定位。                                       |

<div><b>水平居中div：</b><em>margin:0 auto</em></div>

<div style="width:100%;background:#f2f2f2;">
    <div style="width:40px;height:40px;background-color:red;margin:0 auto"></div>
</div>

<br>
<div><b>水平垂直居中浮动元素：</b><em>position:absolute;left:50%;top:50%; transform:translate(-50%,-50%);</em></div>

<div style="width:100%;height:300px;position:relative;background-color:#ccc">
    <span style="position:absolute;left:50%;top:50%; transform:translate(-50%,-50%);float:left;width:100px;height:100px;background-color:green;"></span>
</div>
<br>


<b style="font-size:1.2em">浮动</b>

清除浮动的方式：
 * 投机取巧法 
  `<div style="clear:both;"></div>`
* overflow + zoom方法 
`.fix{overflow:hidden;zoom:1;}`
* after + zoom方法
`.fix:after{display:block; content:'clear'; clear:both; line-height:0; visibility:hidden;}`

<div style="border: 4px solid blue;overflow: hidden;"><!-- BFC -->
  <div style="float: left;border:4px solid red;">我是浮动元素1</div>
  <div style="float: left;border:4px solid yellow;"">我是浮动元素1</div>
  <!-- <br clear="all"/> -->
  <!-- <div style="clear: both"></div> -->
</div>
<div style=" border: 4px solid gray;clear: left">我是页脚</div>
<br>

<b style="font-size:1.2em">display属性</b>
`inline | block | list-item | run-in | compact | marker |table | inline-table | table-row-group | table-header-group |table-footer-group | table-row | table-column-group | table-column |table-cell | table-caption | none | inherit`

| 值           | 描述                                                                           |
| ------------ | ------------------------------------------------------------------------------ |
| inline       | 默认。此元素会被显示为内联元素，元素前后没有换行符。                           |
| block        | 此元素将显示为块级元素，此元素前后会带有换行符。none此元素不会被显示（隐藏）。 |
| inline-block | 行内块元素。（CSS2.1 新增的值）                                                |
| list-item    | 此元素会作为列表显示。                                                         |
| table        | 此元素会作为块级表格来显示（类似table），表格前后带有换行符                    |

<b style="font-size:1.2em">'display'，'position'和'float'间的相互关系</b>

 * 如果'display'设置为'none'，用户端必须忽略掉'position'和'float'。在这种情况下，元素不产生框。
 * 否则，'position'设置为'absolute'或'fixed'，'display'设置为'block'且'float'设置为'none'。框的位置将由'top'，'right'，'bottom'和'left'属性和该框的包含块确定。
 * 否则， 如果'float'的值不是'none'，'display'设置为'block'并且该框浮动。
 * 否则，应用指定的其它'display'属性。

### 3. BFC规范（块级上下文：block formatting context）   

* 内部的 Box 会在垂直方向上一个接一个放置。
* Box 垂直方向的距离由 margin 决定，属于同一个 BFC 的两个相邻 Box 的 margin 会发生重叠。
* 每个元素的 margin box 的左边，与包含块 border box 的左边相接触。
* BFC 的区域不会与 float box 重叠。
* BFC 是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。
* 计算 BFC 的高度时，浮动元素也会参与计算。

满足下列条件之一就可触发 BFC
1) 根元素，即 html
2) float 的值不为none（默认）
3) overflow 的值不为 visible（默认）
4) display 的值为 inline-block、table-cell、table-caption
5) position 的值为 absolute 或 fixed
   <div>
    <div style="overflow:hidden">
        <div style="width:30px;height:30px;float:left;background-color:red"></div>
            <div style="width:30px;height:30px;float:left;background-color:yellow"></div>
    </div>
    <div style="overflow:hidden">
        <div style="width:30px;height:30px;float:left;background-color:orange"></div>
            <div style="width:30px;height:30px;float:left;background-color:green"></div>
    </div>
</div>

### 4. 伪类与伪元素

CSS伪类：用于向某些选择器添加特殊的效果。

| 伪类         | 作用                           |
| ------------ | ------------------------------ |
| :hover       | 将样式添加到鼠标悬浮的元素     |
| :active      | 将样式添加到被激活的元素       |
| :focus       | 将样式添加到获得焦点的元素     |
| :link        | 将样式添加到未被访问过的链接   |
| :visited     | 将样式添加到被访问过的链接     |
| :first-child | 将样式添加到元素的第一个子元素 |
| :lang        | 定义指定的元素中使用的语言     |

CSS3新增伪类

| 新增伪类              | 作用                                                |
| --------------------- | --------------------------------------------------- |
| p:first-of-type       | 选择属于其父元素的首个`<p>`元素的每个`<p>`元素。    |
| p:last-of-type        | 选择属于其父元素的最后`<p>`元素的每个`<p>`元素。    |
| p:only-of-type        | 选择属于其父元素唯一的`<p>`元素的每个`<p>`元素。    |
| p:only-child          | 选择属于其父元素唯一的子元素的每个`<p>`元素。       |
| p:nth-child(n)        | 选择属于其父元素的第n个子元素的每个`<p>`元素。      |
| p:nth-last-child(n)   | 选择属于其父元素的倒数第n个子元素的每个`<p>`元素。  |
| p:nth-of-type(n)      | 选择属于其父元素第n个`<p>`元素的每个`<p>`元素。     |
| p:nth-last-of-type(n) | 选择属于其父元素倒数第n个`<p>`元素的每个`<p>`元素。 |
| p:last-child          | 选择属于其父元素最后一个子元素的每个`<p>`元素。     |
| p:empty               | 选择没有子元素的每个`<p>`元素（包括文本节点）。     |
| p:target              | 选择当前活动的`<p>`元素。                           |
| :not(p)               | 选择非`<p>`元素的每个元素。                         |
| :enabled              | 控制表单控件的可用状态。                            |
| :disabled             | 控制表单控件的禁用状态。                            |
| :checked              | 单选框或复选框被选中。                              |

CSS伪元素：用于将特殊的效果添加到某些选择器。伪元素代表了某个元素的子元素，这个子元素虽然在逻辑上存在，但却并不实际存在于文档树中。

| 伪元素         | 作用                     |
| -------------- | ------------------------ |
| ::first-letter | 将样式添加到文本的首字母 |
| ::first-line   | 将样式添加到文本的首行   |
| ::before       | 在某元素之前插入某些内容 |
| ::after        | 在某元素之后插入某些内容 |

### 5. CSS优化、提高性能的方法

* 修复解析错误（Parsing errors should be fixed）
* 避免使用多类选择符（Don't use adjoining classes）
* 移除空的css规则（Remove empty rules）
* 正确使用display的属性（Use correct properties for a display）
    * display:inline后不应该再使用width、height、margin、padding以及float
    * display:inline-block后不应该再使用float
    * display:block后不应该再使用vertical-align
    * display:table-*后不应再使用margin或者float
* 不滥用浮动（Don't use too many floats）
* 不滥用web字体（Don't use too many web fonts）
* 不声明过多的font-size（Don't use too may font-size declarations）
* 不在选择符中使用ID标识符（Don't use IDs in selectors）
* 不给h1~h6元素定义过多的样式（Don't qualify headings）
* 不重复定义h1~h6元素（Heading styles should only be defined once）
* 值为0时不需要任何单位（Zero values don't need units）
* 值为0时不需要任何单位（Zero values don't need units）
* 值为0时不需要任何单位（Zero values don't need units）
* 值为0时不需要任何单位（Zero values don't need units）
* 遵守盒模型规则（Beware of broken box models）
