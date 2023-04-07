// var findAnagrams = function (s, p) {
//     //create a result arr of all indexes that include an anagram of p
//     var result = [];
//     //object that has all letters of s to later store the frequencies of the letters in p
//     var pFC = {};
//     for (let char of s) {
//         pFC[char] = pFC[char] || 0;
//     }
//     //make a copy of pFC for the sliding window frequency counter
//     var windowFC = { ...pFC };
//     //for every character in p, add the frequency to the frequency counter
//     for (let char of p) {
//         pFC[char] += 1;
//     }
//     //beginning of window
//     var i = 0;
//     //end of window
//     var j = p.length - 1;

//     //for letter in window, add to frequency of windowFC
//     for (let x = i; x <= j; x++) {
//         windowFC[s[x]] += 1;
//     }

//     //while the window is on s
//     while (j < s.length) {
//         //if the two fc are equal, append the start of the window (i)
//         //have to stringify them first bc you cannot compare objects
//         if (JSON.stringify(windowFC) === JSON.stringify(pFC)) {
//             result.push(i);
//         }
//         //decrement frequency of windowFC s[i]
//         windowFC[s[i]]--;
//         //increment i & j to move window up
//         i++;
//         j++;
//         //add new s[j] value frequency to windowFC
//         windowFC[s[j]]++;
//     }
//     return result;
// };

// console.log(findAnagrams("cbaebabacd", "abc"));
var findAnagrams = function (s, p) {
    //frequency of the needed characters from p
    var needed = {};
    for (let char of p) {
        needed[char] = (needed[char] || 0) + 1;
    }
    //amount of characters we will need
    var count = p.length;

    var left = 0;
    var right = p.length - 1;

    console.log(needed);
};
console.log(findAnagrams("cbaebabacd", "abc"));
