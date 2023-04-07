var maxProfit = function (prices) {
    var i = 0;
    var j = 1;
    var maxProf = 0;
    while (j < prices.length) {
        let difference = prices[j] - prices[i];
        if (difference > maxProf) {
            maxProf = difference;
        }
        if (prices[j] < prices[i]) {
            prices[i] = prices[j];
        }
        j++;
    }
    return maxProf;
};

console.log(maxProfit([7, 8, 5, 3, 6, 4]));
//output should be 5
//buy on day 2 [1], sell on day 5 [4]

//var maxProfit = function (prices) {
//i = 0
//set j = last index
//set maxProfit = -Inf
//while i < j
//  if difference is greater than max profit
//          maxProf = difference
//  if difference between i + 1 and j > difference
//          increment i
//          difference = newDif
//  if difference between i and j - 1 > difference:
//          decrement j
//};
