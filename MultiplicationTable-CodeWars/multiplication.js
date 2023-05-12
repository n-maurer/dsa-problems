multiplicationTable = function (size) {
    result = [];
    for (let i = 1; i <= size; i++) {
        currentArr = [];
        for (let j = 1; j <= size; j++) {
            currentArr.push(i * j);
        }
        result.push(currentArr);
    }
    return result;
};

console.log(multiplicationTable(4));
