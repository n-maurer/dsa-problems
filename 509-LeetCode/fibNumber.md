# DATE

4/5/23

# Difficulty

Easy

My thoughts:

-

## [509. Fibonacci Number](https://leetcode.com/problems/fibonacci-number/?envType=study-plan&id=level-1)

### Problem

The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

Given n, calculate F(n).

#### Example 1

```
Input: n = 2
Output: 1
Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.
```

#### Example 2

```
Input: n = 4
Output: 3
Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.
```

#### Example 3

```
Input: n = 3
Output: 2
Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.
```

#### Constraints

-   0 <= n <= 30

### Preliminary Solution

-   **Time Complexity**: O(N!)
-   **Space Complexity**: O(N)

#### Initial Thoughts

First thing I need to do is just really understand what the input and output expectations are. I understand fib numbers but the instructions are a little confusing. I want to see if I can do it with recursion

#### Solution Code

```js
var fib = function (n) {
    if (n === 0 || n === 1) return n;
    return fib(n - 1) + fib(n - 2);
};
```

#### Notes

-   I want to see if I can do it with recursion. The time complexity is terrible

### [Best Available Solution](SOLUTION_LINK)

-   **Time Complexity**: O(N)
-   **Space Complexity**: O(1)

#### Solution Code

```js
var fib = function (n) {
    var total = 0;
    if (n === 0 || n === 1) return n;
    var first = 0;
    var sec = 1;
    for (let num = 2; num <= n; num++) {
        total = first + sec;
        first = sec;
        sec = total;
    }
    return sec;
};
```

#### Notes

-   Much better time and space
