# DATE

4/3/23

# Difficulty

Easy

My thoughts:

-Medium. Took me a while but I got it

## [121. Best Time to Buy and Sell Stock](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/?envType=study-plan&id=level-1)

### Problem

You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

#### Example 1

```
Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
```

#### Example 2

```
Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.
```

#### Constraints

-   `1 <= prices.length <= 105`
-   `0 <= prices[i] <= 104`

### Preliminary Solution

-   **Time Complexity**: O(N)
-   **Space Complexity**: O(1)

#### Initial Thoughts

Probably use multiple pointers approach. Kind of confused on how I should know to restart the lowest price I should buy at.
This took me longer than it should have. Something that I did not think about is that the first day should increment if the second day value is less. This is because the difference to the next day could never be any less.

#### Solution Code

```js
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
```
