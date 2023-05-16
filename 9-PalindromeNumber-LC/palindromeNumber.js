var isPalindrome = function (x) {
    xString = x.toString();
    var i = 0;
    var j = xString.length - 1;
    while (i <= j) {
        if (xString[i] !== xString[j]) {
            return false;
        }
        i++;
        j--;
    }
    return true;
};

console.log(isPalindrome("11211"));
