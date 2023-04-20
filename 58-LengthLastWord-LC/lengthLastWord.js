// var lengthOfLastWord = function (s) {
//     var lengthLastWord = 0;
//     var wordStarted = false;
//     for (let i = s.length - 1; i > -1; i--) {
//         if (s[i] !== " ") {
//             wordStarted = true;
//             lengthLastWord++;
//         }
//         if (s[i] === " " && wordStarted === true) {
//             return lengthLastWord;
//         }
//     }
//     return lengthLastWord;
// };

var lengthOfLastWord = function (s) {
    var lengthLastWord = 0;
    var sCopy = s.trim();
    for (let i = sCopy.length - 1; i > -1; i--) {
        if (sCopy[i] !== " ") {
            lengthLastWord++;
        } else break;
    }
    return lengthLastWord;
};

console.log(lengthOfLastWord("   fly me   to   the moon  "));
