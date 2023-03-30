function score(dice) {
    var total = 0;
    dyeFrequency = {};
    for (let dye of dice) {
        dyeFrequency[dye] = (dyeFrequency[dye] || 0) + 1;
    }
    var diceCombos = {
        "3:1": 1000,
        "3:6": 600,
        "3:5": 500,
        "3:4": 400,
        "3:3": 300,
        "3:2": 200,
        "1:1": 100,
        "1:5": 50,
    };

    for (let dye in dyeFrequency) {
        console.log(dyeFrequency);
        if (dyeFrequency[dye] === 5) {
            if (`1:${dye}` in diceCombos) {
                total += 2 * diceCombos[`1:${dye}`];
                dyeFrequency[dye] -= 2;
            } else {
                dyeFrequency[dye] -= 2;
            }
        } else if (dyeFrequency[dye] === 4) {
            if (`1:${dye}` in diceCombos) {
                total += diceCombos[`1:${dye}`];
                dyeFrequency[dye] -= 1;
            }
        }
        console.log(dyeFrequency);
        if (dyeFrequency[dye] === 3) {
            total += diceCombos[`3:${dye}`];
        }

        if (dyeFrequency[dye] === 2) {
            if (`1:${dye}` in diceCombos) {
                total += 2 * diceCombos[`1:${dye}`];
            }
        } else if (dyeFrequency[dye] === 1) {
            if (`1:${dye}` in diceCombos) {
                total += diceCombos[`1:${dye}`];
            }
        }
    }
    return total;
}

console.log(score([3, 3, 3, 3, 3]));
