// function bar() {
//     console.log('bar');
// }

// function baz(){
//     setTimeout(() => {
//         console.log('baz')
//     }, 0);
// }

// function foo() {
//      setTimeout(() => {
//          baz()
//      }, 0);
//     setTimeout(() => {
//         bar()
//     }, 0);

//     for (let i = 0; i < 5000; i++) {
//         setTimeout(() => {
//             console.log(i)
//         }, 0);
//     }
// }

// foo()

// function showName() {
//     console.log("极客时间")
// }
// var timerID = setTimeout(showName, 2147483648); //会被理解调用执行

var name = 1;
var MyObj = {
    name: 2,
    showName: function () {
        console.log(this.name);
    }
}
setTimeout(MyObj.showName.bind(MyObj), 1000)

