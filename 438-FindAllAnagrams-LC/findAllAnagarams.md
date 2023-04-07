# DATE

4/7/23

# Category

Sliding Window/Two Pointer

# Difficulty

Medium

My thoughts:

-

## [438. Find All Anagrams in a String](https://leetcode.com/problems/find-all-anagrams-in-a-string/?envType=study-plan&id=level-1)

### Problem

Given two strings s and p, return an array of all the start indices of p's anagrams in s. You may return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

#### Example 1

```
Input: s = "cbaebabacd", p = "abc"
Output: [0,6]
Explanation:
The substring with start index = 0 is "cba", which is an anagram of "abc".
The substring with start index = 6 is "bac", which is an anagram of "abc".
```

#### Example 2

```
Input: s = "abab", p = "ab"
Output: [0,1,2]
Explanation:
The substring with start index = 0 is "ab", which is an anagram of "ab".
The substring with start index = 1 is "ba", which is an anagram of "ab".
The substring with start index = 2 is "ab", which is an anagram of "ab".
```

#### Constraints

-   `1 <= s.length, p.length <= 3 * 104`
-   `s and p consist of lowercase English letters`

### Preliminary Solution

-   **Time Complexity**: O(N^2)
-   **Space Complexity**: O(1)

#### Initial Thoughts

-   Make a frequency counter of string 'p'
-   Go through the string 's' creating a sliding window with a first pointer at index 0 and second at string 'p' length - 1.
-   We want the frequency of all the letters in the sub-array from the two pointers but we do not want to have to make a new one every time the window moves
-   Maybe each time the window moves up, we remove(or decrease) from the counter whatever was at the first pointer, then we add whatever comes from the index of the second pointer after incrementing

-   How can we compare the initial frequency counter of 'p' to the new frequency counter without having to loop through it every time?

-   I think I have a solution that would be O(N) but technically O(3N). Going to test it out

-   I have learned that you cannot compare two objects in js

-   Would stringifying them be considered cheating?

-   JSON.stringify makes my solution O(N^2)

#### Solution Code

```js
var findAnagrams = function (s, p) {
    //create a result arr of all indexes that include an anagram of p
    var result = [];
    //object that has all letters of s to later store the frequencies of the letters in p
    var pFC = {};
    for (let char of s) {
        pFC[char] = pFC[char] || 0;
    }
    //make a copy of pFC for the sliding window frequency counter
    var windowFC = { ...pFC };
    //for every character in p, add the frequency to the frequency counter
    for (let char of p) {
        pFC[char] += 1;
    }
    //beginning of window
    var i = 0;
    //end of window
    var j = p.length - 1;

    //for letter in window, add to frequency of windowFC
    for (let x = i; x <= j; x++) {
        windowFC[s[x]] += 1;
    }

    //while the window is on s
    while (j < s.length) {
        //if the two fc are equal, append the start of the window (i)
        //have to stringify them first bc you cannot compare objects
        if (JSON.stringify(windowFC) === JSON.stringify(pFC)) {
            result.push(i);
        }
        //decrement frequency of windowFC s[i]
        windowFC[s[i]]--;
        //increment i & j to move window up
        i++;
        j++;
        //add new s[j] value frequency to windowFC
        windowFC[s[j]]++;
    }
    return result;
};
```

#### Notes

-   There are for sure better ways to do this but I am glad this one works out. Im curious to see the optimal solution though. The space and time are good but are they actually good.

Since I have JSON.stringify, my time complexity is actually O(N^2)

### [Best Available Solution](SOLUTION_LINK)

-   **Time Complexity**: O(TIME)
-   **Space Complexity**: O(SPACE)

#### Solution Code

```
SOLUTION CODE GOES HERE
```

#### Notes

-   Anything additional goes here in bullets
