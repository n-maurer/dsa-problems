# DATE

4/6/23

# Difficulty

Easy

My thoughts:

-Hard. I really struggled with this

## [70. Climbing Stairs](https://leetcode.com/problems/climbing-stairs/?envType=study-plan&id=level-1)

### Problem

You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

#### Example 1

```
Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps
```

#### Example 2

```
Input: n = 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step
```

#### Constraints

-   1 <= n <= 45

### Preliminary Solution

-   **Time Complexity**: O(N)
-   **Space Complexity**: O(1)

#### Initial Thoughts

I've seen this before but cannot remember how to do it. Obviously you could do nested for loops but that time complexity would be terrible.
Next thought is, do I start from 0, or n?
This problem is rough. It can be done with something similar to a fib sequence but the time limit is too long

#### Solution Code

```js
var climbStairs = function (n) {
    var one = 1;
    var two = 1;
    for (let i = 0; i < n - 1; i++) {
        next = one + two;
        one = two;
        two = next;
    }
    return two;
};
```

#### Notes

-   This is a super challenging problem to wrap your head around
-   Setting one and two = 1 is me defining the base case
-   There is only 1 way to climb 0 or 1 steps
-   Each time through, we add the previous two numbers
