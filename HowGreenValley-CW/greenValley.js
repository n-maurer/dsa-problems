function makeValley(arr) {
    var sorted = arr.sort(function (a, b) {
        return b - a;
    });
    var firstHalf = [];
    var secondHalf = [];
    var i = 0;
    var j = 1;
    while (i < arr.length) {
        if (i === arr.length - 1) {
            secondHalf.push(sorted[i]);
        }
        else {
            firstHalf.push(sorted[i]);
        }
        if (j < sorted.length) {
            secondHalf.push(sorted[j]);
        }
        i += 2;
        j += 2;
    }
    var result = firstHalf;
    for (var i_1 = secondHalf.length - 1; i_1 >= 0; i_1--) {
        result.push(secondHalf[i_1]);
    }
    return result;
}
console.log(makeValley([17, 17, 15, 14, 8, 7, 7, 5, 4, 4, 1]));
