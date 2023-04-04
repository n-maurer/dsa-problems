# DATE

# Difficulty

Easy

My thoughts:

-

## [136. Single Number](https://leetcode.com/problems/single-number/)

### Problem

Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.

#### Example 1

```
Input: nums = [2,2,1]
Output: 1
```

#### Example 2

```
Input: nums = [4,1,2,1,2]
Output: 4
```

#### Example 3

```
Input: nums = [1]
Output: 1
```

#### Constraints

-   `1 <= nums.length <= 3 * 104`
-   `-3 * 104 <= nums[i] <= 3 * 104`

### Preliminary Solution

-   **Time Complexity**: O(N)
-   **Space Complexity**: O(N)

#### Initial Thoughts

First thought is make a frequency counter. Then go through the frequency counter and see which one's value is equal to 1.

Since the the largest input could be 10000, would we want to have to go through the loop

Lets see if theres any way we can refactor so we don't have to

#### Solution Code

```js
var singleNumber = function (nums) {
    var freqCounter = {};
    for (let i of nums) {
        freqCounter[i] = (freqCounter[i] || 0) + 1;
    }
    for (key in freqCounter) {
        if (freqCounter[key] === 1) {
            return key;
        }
    }
    return null;
};
```

#### Solution Code

```js
var singleNumber = function (nums) {
    // initialize a variable to store the result of XOR operation
    let uniqueInteger = 0;

    // loop through the input array and XOR each integer with the uniqueInteger
    for (let i of nums) {
        uniqueInteger ^= i;
    }

    // return the unique integer that appears only once in the input array
    return uniqueInteger;
};
```

#### Notes

-   This is the version that has the best space and time complexity O(N) for both. However, it is more difficult to understand
-   The XOR (exclusive or) operation is a binary operator that compares corresponding bits of two operands. It returns a 1 in each bit position where the corresponding bits of either but not both operands are 1s. In other words, the XOR operation returns a 1 if and only if the corresponding bits of its operands are different.
