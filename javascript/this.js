// 1.
// let bar = {
//     myName: "极客邦",
//     test1: 1
// }

// function foo() {
//     this.myName = "极客时间"
// }
// foo.call(bar)
// console.log(bar)
// console.log(myName)

// 2.
// var myObj = {
//     name: "极客时间",
//     showThis: function () {
//         console.log(this)
//         bar = () => {
//             console.log(this)
//         }
//         bar()
//         function baz(){
//             console.log(this)
//         }
//         baz.call(this)
//     }
// }
// myObj.showThis()

// 3.
let userInfo = {
    name: "jack.ma",
    age: 13,
    sex: 'male',
    updateInfo: function () {
        //模拟xmlhttprequest请求延时
        function update(){
            this.name = "pony.ma"
            this.age = 39
            this.sex = 'female'
        }
        setTimeout(
            update.bind(this), 100)
    }
}

userInfo.updateInfo()
setTimeout(() => {
    console.log(userInfo)
}, 99);
