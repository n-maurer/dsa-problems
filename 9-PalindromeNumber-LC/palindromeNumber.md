# DATE

5/16/23

# Difficulty

Easy

My thoughts:

-Easy

## [9. Palindrome Number](https://leetcode.com/problems/palindrome-number/description/)

### Problem

Given an integer x, return true if x is a
palindrome, and false otherwise.

#### Example 1

```
Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
```

#### Example 2

```
Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
```

#### Constraints

-   `-231 <= x <= 231 - 1`

### Preliminary Solution

-   **Time Complexity**: O(N)
-   **Space Complexity**: O(1)

#### Initial Thoughts

I initially took this problem and created a first and second half. Then reversed the second half. This was not efficient. I then realized I could just loop throught the number with two pointers (a window that closes) and compare then two points

#### Solution Code

```js
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
```
