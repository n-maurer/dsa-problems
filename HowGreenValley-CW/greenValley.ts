function makeValley(arr: number[]): number[] {
    const sorted: number[] = arr.sort(function (a, b) {
        return b - a;
    });
    var firstHalf: number[] = [];
    var secondHalf: number[] = [];
    let i: number = 0;
    let j: number = 1;
    while (i < arr.length) {
        if (i === arr.length - 1) {
            secondHalf.push(sorted[i]);
        } else {
            firstHalf.push(sorted[i]);
        }

        if (j < sorted.length) {
            secondHalf.push(sorted[j]);
        }
        i += 2;
        j += 2;
    }
    var result: number[] = firstHalf;
    for (let k = secondHalf.length - 1; k >= 0; k--) {
        result.push(secondHalf[k]);
    }
    return result;
}

console.log(makeValley([17, 17, 15, 14, 8, 7, 7, 5, 4, 4, 1]));
