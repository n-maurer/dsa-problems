function sumPairs(ints, s) {
    // return [0, 0] || undefined;
    var dict = {};
    var checks = [];
    for (let i in ints) {
        var check = s - ints[i];
        if (dict[i] !== undefined) {
            checks.push(dict[check], i);
        }
        dict[ints[i]] = i;
    }

    console.log(dict);
}

console.log(sumPairs([4, 3, 2, 3, 4], 6));
