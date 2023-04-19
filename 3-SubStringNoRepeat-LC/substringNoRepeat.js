var lengthOfLongestSubstring = function (s) {
    // var maxSSLength = 0;
    // var ssCharacterCount = {};
    // var i = 0;
    // var j = -1;
    // var currentLength = 0;
    // while (j < s.length) {
    //     j++;
    //     if (currentLength > maxSSLength) {
    //         maxSSLength = currentLength;
    //     }
    //     if (s[j] === " ") {
    //         if (!ssCharacterCount["blank"]) {
    //             ssCharacterCount["blank"] = true;
    //             currentLength++;
    //         }
    //     } else {
    //         if (!ssCharacterCount[s[j]]) {
    //             ssCharacterCount[s[j]] = true;
    //             currentLength++;
    //         } else {
    //             currentLength = 0;
    //             ssCharacterCount = {};
    //             ssCharacterCount[s[j]] = true;
    //             currentLength++;
    //             i++;
    //             if (s[i] === " ") {
    //                 if (!ssCharacterCount["blank"]) {
    //                     ssCharacterCount["blank"] = true;
    //                     currentLength++;
    //                 }
    //             } else {
    //                 if (!ssCharacterCount[s[i]]) {
    //                     ssCharacterCount[s[i]] = true;
    //                     currentLength++;
    //                 }
    //             }
    //         }
    //     }
    // }
    // return maxSSLength;
    var charSet = new Set();
};

console.log(lengthOfLongestSubstring("anviaj"));
