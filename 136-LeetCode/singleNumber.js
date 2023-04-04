//nums length always greater than 1 and less than 3 * 10^4

var singleNumber = function (nums) {
    var freqCounter = {};
    for (let i of nums) {
        freqCounter[i] = (freqCounter[i] || 0) + 1;
    }
    for (key in freqCounter) {
        if (freqCounter[key] === 1) {
            return key;
        }
    }
    return null;
};

//expected outcome: 4
console.log(singleNumber([4, 1, 2, 1, 2]));
