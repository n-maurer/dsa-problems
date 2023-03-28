var isSubsequence = function (s, t) {
    if (s === t) return true;
    let i = 0;
    let j = 0;
    while (j < t.length) {
        if (s[i] === t[j]) i++;
        if (i === s.length) return true;
        j++;
    }
    return false;
};

//          i
//      a b c
//      a h b g d c
//                j

console.log(isSubsequence("abc", "ahbgdc"));
