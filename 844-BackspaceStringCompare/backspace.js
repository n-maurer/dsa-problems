// var backspaceCompare = function (s, t) {
//     var sArr = "";
//     var tArr = "";
//     for (let char of s) {
//         if (char === "#") {
//             sArr = sArr.substring(0, sArr.length - 1);
//             continue;
//         }
//         sArr = sArr.concat(char);
//     }
//     for (let char of t) {
//         if (char === "#") {
//             tArr = tArr.substring(0, tArr.length - 1);
//             continue;
//         }
//         tArr = tArr.concat(char);
//     }
//     if (sArr === tArr) {
//         return true;
//     }
//     return false;
// };
var backspaceCompare = function (s, t) {
    var j = s.length - 1;
    var i = t.length - 1;
    sCount = 0;
    tCount = 0;

    while (i > -1 || j > -1) {
        console.log(s[j], t[i]);
        i--;
        j--;
    }
};
//                               j
console.log(backspaceCompare("ab##", "c#d#"));
//                                   i
