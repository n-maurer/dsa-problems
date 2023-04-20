function partsSums(ls) {
    var returnArr = [];
    var lsSum = 0;
    for (let num of ls) lsSum += num;
    var i = 0;
    while (i <= ls.length) {
        returnArr.push(lsSum);
        lsSum -= ls[i];
        i++;
    }
    return returnArr;
}

console.log(partsSums([]));
