# DATE

4/25/23

# Category

Arr

# Difficulty

Easy

My thoughts:

-

## [704. Binary Search](https://leetcode.com/problems/binary-search/?envType=study-plan&id=level-1)

### Problem

Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

You must write an algorithm with O(log n) runtime complexity.

#### Example 1

```
Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4
```

#### Example 2

```
Input: nums = [-1,0,3,5,9,12], target = 2
Output: -1
Explanation: 2 does not exist in nums so return -1
```

#### Constraints

-   1 <= nums.length <= 104
-   -104 < nums[i], target < 104
-   All the integers in nums are unique.
-   nums is sorted in ascending order.

### Preliminary Solution

-   **Time Complexity**: O(N)
-   **Space Complexity**: O(1)

#### Initial Thoughts

First thought is to find the middle, if it is less, then find the middle of that. Vice Versa

#### Solution Code

```js
var search = function (nums, target) {
    var middleIdx = Math.floor(nums.length / 2);
    var i = 0;
    var j = nums.length - 1;

    while (true) {
        if (target === nums[i]) return i;
        if (target === nums[j]) return j;
        if (target === nums[middleIdx]) return middleIdx;
        if (target > nums[middleIdx]) {
            i = middleIdx;
            middleIdx = Math.floor((i + j) / 2);
        } else {
            j = middleIdx;
            middleIdx = Math.floor((i + j) / 2);
        }
        if (i >= j - 1) break;
    }
    return -1;
};
```

#### Notes

-   definitely not the best solution. Room for improvement

### [Best Available Solution](SOLUTION_LINK)

-   **Time Complexity**: O(TIME)
-   **Space Complexity**: O(SPACE)

#### Solution Code

```
SOLUTION CODE GOES HERE
```

#### Notes

-   Anything additional goes here in bullets
