# DATE

# Difficulty

Easy

My thoughts:

-   Easy

## [409. Longest Palindrome](https://leetcode.com/problems/longest-palindrome/?envType=study-plan&id=level-1)

### Problem

Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.

Letters are case sensitive, for example, "Aa" is not considered a palindrome here.

#### Example 1

```
Input: s = "abccccdd"
Output: 7
Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.
```

#### Example 2

```
Input: s = "a"
Output: 1
Explanation: The longest palindrome that can be built is "a", whose length is 1.
```

#### Constraints

-   `1 <= s.length <= 2000`
-   `s consists of lowercase and/or uppercase English letters only.`

### Preliminary Solution

-   **Time Complexity**: O(N)
-   **Space Complexity**: O(N)

#### Initial Thoughts

Initially, we can create a frequency counter for each letter in the given string. Then, we can iterate through the frequencies and for each frequency that is 2 or greater, we can check if it is even or odd. If it is even, we can add the frequency value to our longest count, but if it is odd, we can add the frequency value minus 1 to the count. We can have at most one letter with an odd frequency in the longest substring, meaning that all the other letters in the substring must have an even frequency.

Did not take into account if there were 3 of a number

#### Solution Code

```js
var longestPalindrome = function (s) {
    var longest = 0;
    var usedOneLetter = false;
    var freqCounter = {};
    for (let char of s) {
        freqCounter[char] = (freqCounter[char] || 0) + 1;
    }
    for (let key in freqCounter) {
        if (freqCounter[key] % 2 === 0) {
            longest += freqCounter[key];
        } else {
            if (!usedOneLetter) {
                longest += freqCounter[key];
                usedOneLetter = true;
            } else {
                longest += freqCounter[key] - 1;
            }
        }
    }
    return longest;
};
```

#### Solution Code

```js
var longestPalindrome = function (s) {
    let answer = 0;
    let hashTable = {};
    for (let char of s) {
        hashTable[char] = (hashTable[char] || 0) + 1;
        if (hashTable[char] % 2 === 0) {
            answer += 2;
        }
    }
    return s.length > answer ? answer + 1 : answer;
};
```

#### Notes

-   This solution makes it so we dont have to reiterate throught the string, it is all done while we are creating the frequency counter
