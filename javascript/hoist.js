// 1: 如果是同名的函数， JavaScript编译阶段会选择最后声明的那个。
// 2: 如果变量和函数同名， 那么在编译阶段， 变量的声明会被忽略

// var的创建和初始化被提升， 赋值不会被提升。
// let的创建被提升， 初始化和赋值不会被提升。
// function的创建、 初始化和赋值均会被提升。

// showName()

// function showName(){
//     console.log(1)
// }

// var showName = function () {
//     console.log(2)
// }
// showName()

// (function () {

//     var x = foo();

//     var foo = function foo() {
//         return "foobar"
//     };
//     return x;
// })();

// var a = 2

// function add(b, c) {
//     console.trace()
//     return b + c
// }

// function addAll(b, c) {
//     var d = 10
//     global.result = add(b, c)
//     return a + global.result + d
// }
// console.log(addAll(3, 6))
// 全局执行上下文
//  a = undefined
//  add = function (b, c) {...}
//  addAll = function (b, c) {...}

// addAll 执行上下文
// a = 2
// d = undefined
// result = undefined

// add执行上下文
//...

// 执行add()
// a = 2
// d = 10 
// result = 9

// 执行 addAll()

// 返回 21


// var myname = "极客时间"
// function showName() {
//     console.log(myname);
//     if (0) {
//         var myname = "极客邦"
//     }
//     console.log(myname);
// }
// showName()
// console.log(myname)

// function foo() {
//     for (var i = 0; i < 7; i++) {}
//     console.log(i);
// }
// foo()

// function letTest() {
//     var x = 1;
//     if (true) {
//         let x = 2; // 不同的变量 
//         console.log(x); // 2 
//     }
//     console.log(x); // 1
// }

// letTest()

// function foo(){
//     var a = 1
//     let b = 2
//     {
//         let b = 3
//         var c = 4
//         let d = 5
//         console.log(a)  // 1
//         console.log(b) // 3
//     }

//     console.log(b) // 2
//     console.log(c) // 4
//     console.log(d) // undefined
// }

// foo()

// 1.
// let myname = '极客时间' 
// {
//     console.log(myname)
//     let myname = '极客邦'
// }

// 2.

// function bar() {
//     console.log(myName)
// }

// function foo() {
//     var myName = "极客邦"
//     bar()
// }
// var myName = "极客时间"
// foo() // 极客时间




// 3.
// function bar() {
//     var myName = "极客世界"
//     let test1 = 100
//     if (1) {
//         let myName = "Chrome浏览器"
//         console.log(test)
//     }
// }

// function foo() {
//     var myName = "极客邦"
//     let test = 2 
//     {
//         let test = 3
//         bar()
//     }
// }
// var myName = "极客时间"
// let myAge = 10
// let test = 1
// foo()

// 4.
// function foo() {
//     var myName = "极客时间"
//     let test1 = 1
//     const test2 = 2
//     var innerBar = {
//         getName: function () {
//             console.log(test1)
//             return myName
//         },
//         setName: function (newName) {
//             myName = newName
//         }
//     }
//     return innerBar
// }
// var bar = foo()

// bar.test1 = 2

// bar.setName("极客邦")

// bar.getName()

// console.log(bar.getName())

// 5.
var bar = {
    myName: "time.geekbang.com",
    printName: function () {
        console.log(this.myName)
    }
}

function foo() {
    let myName = "极客时间"
    return bar.printName
}
let myName = "极客邦"
let _printName = foo
_printName()
bar.printName()
