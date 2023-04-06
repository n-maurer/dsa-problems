var climbStairs = function (n) {
    var one = 1;
    var two = 1;
    for (let i = 0; i < n - 1; i++) {
        next = one + two;
        one = two;
        two = next;
    }
    return two;
};

console.log(climbStairs(45));
//1 step + 1 step + 1 step
//1 step + 2 steps
//2 steps + 1 step
