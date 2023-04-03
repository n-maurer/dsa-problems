var longestPalindrome = function (s) {
    var longest = 0;
    var usedOneLetter = false;
    var freqCounter = {};
    for (let char of s) {
        freqCounter[char] = (freqCounter[char] || 0) + 1;
    }
    for (let key in freqCounter) {
        if (freqCounter[key] % 2 === 0) {
            longest += freqCounter[key];
        } else {
            if (!usedOneLetter) {
                longest += freqCounter[key];
                usedOneLetter = true;
            } else {
                longest += freqCounter[key] - 1;
            }
        }
    }
    return longest;
};

console.log(longestPalindrome("ccc"));

// var longestPalindrome = function (s) {
//create a longest var = 0
//create var usedOneLetter = false
//create a frequency counter for the string characters
//iterate through the freq counter values
//      if value even:
//          add to longest
//      if value odd:
//if value = 1 & usedOneLetter = false
//                  add to longest
//                  set usedOneLetter to True
//            else (not 1):
//                  add value - 1 to letter
//return longest
// };
