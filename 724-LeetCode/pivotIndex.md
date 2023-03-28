# DATE

3/27/23

# Difficulty

Easy

My thoughts:

-   Between easy and medium. My initial thoughts were on track, but
    I made a few mistakes along the way

## [724. Find Pivot Index](https://leetcode.com/problems/find-pivot-index/?envType=study-plan&id=level-1)

### Problem

Given an array of integers nums, calculate the pivot index of this array.

The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.

If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. This also applies to the right edge of the array.

Return the leftmost pivot index. If no such index exists, return -1.

#### Example 1

```
Input: nums = [1,7,3,6,5,6]
Output: 3
Explanation:
The pivot index is 3.
Left sum = nums[0] + nums[1] + nums[2] = 1 + 7 + 3 = 11
Right sum = nums[4] + nums[5] = 5 + 6 = 11
```

#### Example 2

```
Input: nums = [1,2,3]
Output: -1
Explanation:
There is no index that satisfies the conditions in the problem statement.
```

#### Example 3

```
Input: nums = [2,1,-1]
Output: 0
Explanation:
The pivot index is 0.
Left sum = 0 (no elements to the left of index 0)
Right sum = nums[1] + nums[2] = 1 + -1 = 0
```

#### Constraints

-   1 <= nums.length <= 104
-   -1000 <= nums[i] <= 1000

### Preliminary Solution

-   **Time Complexity**: O(N)
-   **Space Complexity**: O(1)

#### Initial Thoughts

My initial thought is to go through nums and add up the total of numbers. Use two pointer
approach to check if the first half is equal to the second half.

I think we should start with an index i and j at the end of the list and work our way inward.

#### Solution Code

```js
var pivotIndex = function (nums) {
    var firstSum = 0;
    for (let i = 1; i < nums.length; i++) {
        firstSum += nums[i];
    }

    let j = 0;
    var secondSum = 0;

    while (j < nums.length) {
        if (firstSum === secondSum) {
            return j;
        }
        secondSum += nums[j];
        j++;
        firstSum -= nums[j];
    }
    return -1;
};
```

#### Notes

-   It wants the first pivot. When working backwards, we get the second pivot if there are multiple zeros in a row

### [Best Available Solution](SOLUTION_LINK)

-   **Time Complexity**: O(N)
-   **Space Complexity**: O(1)

#### Additional Details

#### Solution Code

```js
function pivotIndex(nums) {
    const totalSum = nums.reduce((acc, num) => acc + num, 0);
    let leftSum = 0;

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (leftSum === totalSum - leftSum - num) {
            return i;
        }
        leftSum += num;
    }

    return -1;
}
```

#### Notes

-   The reduce() function is an array method in JavaScript that takes a callback function and an optional initial value as arguments, and applies the callback function to each element of the array to accumulate a single value. The accumulated value is returned after all elements have been processed.

-   The callback function passed to reduce() takes two arguments: an accumulator (the accumulated value), and the current element of the array.

-   Overall, using the reduce method cleans up the code a little bit and makes it more readable. But, for beginners, this may make it more difficult to understand
