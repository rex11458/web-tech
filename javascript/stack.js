// function division(a, b) {
//     return division(a, b)
// }
// console.log(division(1, 2))

// function runStack(n) {
//     if (n === 0) return 100;
//     return runStack(n - 2);
// }
// runStack(50000)


// function runStack(n){
//     while(n != 0){
//         n -= 2;
//     }
//     return 100;
// }
// runStack(50000);

function runStack(n, result = 100) {
    if (n === 0) {
        return result
    }

    return runStack(n - 2, result)
}

runStack(50000);
