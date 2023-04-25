var search = function (nums, target) {
    var middleIdx = Math.floor(nums.length / 2);
    var i = 0;
    var j = nums.length - 1;

    while (true) {
        if (target === nums[i]) return i;
        if (target === nums[j]) return j;
        if (target === nums[middleIdx]) return middleIdx;
        if (target > nums[middleIdx]) {
            i = middleIdx;
            middleIdx = Math.floor((i + j) / 2);
        } else {
            j = middleIdx;
            middleIdx = Math.floor((i + j) / 2);
        }
        if (i >= j - 1) break;
    }
    return -1;
};

console.log(search([-1, 0, 3, 5, 9, 12], 12));
