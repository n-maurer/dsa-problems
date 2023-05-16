function encrypt(text, n) {
    var resultText = text;
    for (let num = 1; num <= n; num++) {
        let odd = "";
        let even = "";
        for (let i = 0; i < resultText.length; i++) {
            if (i % 2 === 0) {
                even = even.concat(resultText[i]);
            } else {
                odd = odd.concat(resultText[i]);
            }
        }
        resultText = odd.concat(even);
    }
    return resultText;
}

function decrypt(encryptedText, n) {
    var resultText = encryptedText;
    var middle = Math.floor(resultText.length / 2);
    var firstHalf = resultText.slice(0, middle);
    var secondHalf = resultText.slice(middle, resultText.length);
    var returnResult = "";
    for (let num = 0; num < secondHalf.length; num++) {
        returnResult = returnResult.concat(secondHalf[num]);
        if (firstHalf[num] !== undefined) {
            returnResult = returnResult.concat(firstHalf[num]);
        } else {
            break;
        }
    }
    return returnResult;
}

// console.log(encrypt("01234", 1));
console.log(decrypt("13024", 1));
