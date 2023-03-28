# DATE

3/28/23

# Difficulty

Easy

My thoughts:

-

## [392. Is Subsequence](https://leetcode.com/problems/is-subsequence/?envType=study-plan&id=level-1)

### Problem

Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

#### Example 1

```
Input: s = "axc", t = "ahbgdc"
Output: false
```

#### Example 2

```
Input: s = "abc", t = "ahbgdc"
Output: true
```

#### Constraints

-   0 <= s.length <= 100
-   0 <= t.length <= 104
-   s and t consist only of lowercase English letters.

### Preliminary Solution

-   **Time Complexity**: O(N)
-   **Space Complexity**: O(1)

#### Initial Thoughts

Initial thought is to use pointers. have a pointer on s, and if it is in at the pointer in t, then increase pointer index of s

One thought I have is what if there are multiple of the letters from s in t. So say we have s = "abc", what if t = "abbc"?

#### Solution Code

```js
var isSubsequence = function (s, t) {
    if (s === t) return true;
    let i = 0;
    let j = 0;
    while (j < t.length) {
        if (s[i] === t[j]) i++;
        if (i === s.length) return true;
        j++;
    }
    return false;
};
```

#### Notes

-   Had to add edge case for empty string. It also made me think, we dont need to loop through the whole thing if they are equal to start, so it saves that hassle to throw in the first line

### [Best Available Solution](SOLUTION_LINK)

-   **Time Complexity**: O(N)
-   **Space Complexity**: O(1)

#### Solution Code

```js
var isSubsequence = function (s, t) {
    if (s === t) return true;
    let i = 0;
    for (let j = 0; j < t.length; j++) {
        if (s[i] === t[j]) i++;
        if (i === s.length) return true;
    }
    return false;
};
```

#### Notes

-   This makes the code more concise and eliminates the need for a separate variable j and an additional increment statement. It also reduces the likelihood of an infinite loop in case of a bug.
