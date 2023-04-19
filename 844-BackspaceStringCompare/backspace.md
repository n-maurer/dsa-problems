# DATE

4/10/23

# Category

# Difficulty

Easy

My thoughts:

-Easy if you use O(N) space

## [844. Backspace String Compare](https://leetcode.com/problems/backspace-string-compare/description/?envType=study-plan&id=level-1)

### Problem

Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.

Note that after backspacing an empty text, the text will continue empty.

#### Example 1

```
Input: s = "ab#c", t = "ad#c"
Output: true
Explanation: Both s and t become "ac".
```

#### Example 2

```
Input: s = "ab##", t = "c#d#"
Output: true
Explanation: Both s and t become "".
```

#### Constraints

-   `1 <= s.length, t.length <= 200`
-   `s and t only contain lowercase letters and '#' characters.`

### Preliminary Solution

-   **Time Complexity**: O(N)
-   **Space Complexity**: O(N)

#### Initial Thoughts

First thought was to make two array and see if they are equal. You cannot compare arrays the same way you can other objects.

#### Solution Code

```js
var backspaceCompare = function (s, t) {
    var sArr = "";
    var tArr = "";
    for (let char of s) {
        if (char === "#") {
            sArr = sArr.substring(0, sArr.length - 1);
            continue;
        }
        sArr = sArr.concat(char);
    }
    for (let char of t) {
        if (char === "#") {
            tArr = tArr.substring(0, tArr.length - 1);
            continue;
        }
        tArr = tArr.concat(char);
    }
    if (sArr === tArr) {
        return true;
    }
    return false;
};
```

#### Notes

-   This solution can be optimized to not use O(N) space

### [Best Available Solution](SOLUTION_LINK)

-   **Time Complexity**: O(TIME)
-   **Space Complexity**: O(SPACE)

#### Solution Code

```
SOLUTION CODE GOES HERE
```

#### Notes

-   Anything additional goes here in bullets
