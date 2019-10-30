// // function executor(resolve, reject) {
// //     let rand = Math.random();
// //     console.log(1)
// //     if (rand > 0.2) resolve(rand)
// //     else reject(rand)
// // }
// // var p0 = new Promise(executor);

// // var p1 = p0.then((value) => {
// //     console.log("succeed-1")
// //     console.log(value)

// //     return new Promise(executor)
// // })

// // var p3 = p1.then((value) => {
// //     console.log("succeed-2")
// //     console.log(value)

// //     return new Promise(executor)
// // })
// // var p4 = p3.then((value) => {
// //     console.log("succeed-3")
// //     console.log(value)

// //     return new Promise(executor)
// // })

// // p4.catch((error) => {
// //     console.log("error")
// // })

// // console.log(2)

// function Bromise(executor) {
//     var onResolve_ = null
//     var onReject_ = null
//     this.then = function (onResolve, onReject) {
//         onResolve_ = onResolve
//     }

//     function resolve(value) {
//         setTimeout(() => {
//             onResolve_(value)

//         }, 0);
//     }
//     executor(resolve, null)
// }

// function executor(resolve, reject) {
//     resolve(100)
// }

// let demo = new Bromise(executor)

// function onResolve(value) {
//     console.log(value)
// }

// demo.then(onResolve)

// async function foo() {
//     console.log(1)
//      let a = await 100 
//      console.log(a) 
//      console.log(2)
// }
// console.log(0) 
// foo() 
// console.log(3)


// async function foo() {
//     console.log('foo') // 5
// }

// async function bar() {
//     console.log('bar start')  // 2
//     await foo()
//     console.log('bar end') // 7
// }

// console.log('script start')  // 1

// setTimeout(function () {
//     console.log('setTimeout') // 8
// }, 0)

// bar(); // 

// new Promise(function (resolve) {

//     console.log('promise executor') // 3
//     resolve();

// }).then(function () {

//     console.log('promise then') // 6

// })

// console.log('script end') // 4


async function async1() {
    console.log('async1 start')
    await async2()
    console.log('async1 end')
}

async function async2() {
    console.log('async2')
}

console.log('script start') 

setTimeout(function () {
    console.log('setTimeout')
}, 0)

async1();

new Promise(function (resolve) {
    console.log('promise1')
    resolve();
}).then(function () {
    console.log('promise2')
})

console.log('script end')


// script start
// async1 start
// async2
// promise1
// script end
// async1 end
// promise2
// setTimeout
