// var fib = function (n) {
//     if (n === 0 || n === 1) return n;
//     return fib(n - 1) + fib(n - 2);
// };

// //expected output: 3
// //explanation: 0 + 1 + 2
// console.log(fib(4));

var fib = function (n) {
    var total = 0;
    if (n === 0 || n === 1) return n;
    var first = 0;
    var sec = 1;
    for (let num = 2; num <= n; num++) {
        total = first + sec;
        first = sec;
        sec = total;
    }
    return sec;
};

//expected output: 3
//explanation: 0 + 1 + 2
console.log(fib(3));
