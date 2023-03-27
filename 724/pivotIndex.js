var pivotIndex = function (nums) {
    var firstSum = 0;
    for (let i = 1; i < nums.length; i++) {
        firstSum += nums[i];
    }
    console.log(firstSum);

    let j = 0;
    var secondSum = 0;

    while (j < nums.length) {
        if (firstSum === secondSum) {
            return j;
        }
        secondSum += nums[j];
        j++;
        firstSum -= nums[j];
    }
    return -1;
};

//first sum = 0
//      j
//     [2, 1, -1]
//         f   f
//second sum = 0

console.log(pivotIndex([2, 1, -1]));
