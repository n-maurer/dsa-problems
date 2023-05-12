function perimeter(n) {
    var total = 1;
    var x = 0;
    var y = 1;
    for (let i = 0; i < n; i++) {
        var newY = x + y;
        total += newY;
        x = y;
        y = newY;
    }
    return total * 4;
}

console.log(perimeter(7));
