# DATE

4/20/23

# Category

Strings

# Difficulty

Easy

My thoughts:

-Easy

## [58. Length of Last Word](https://leetcode.com/problems/length-of-last-word/)

### Problem

Given a string s consisting of words and spaces, return the length of the last word in the string.

A word is a maximal substring consisting of non-space characters only.

#### Example 1

```
Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.
```

#### Example 2

```
Input: s = "   fly me   to   the moon  "
Output: 4
Explanation: The last word is "moon" with length 4.
```

#### Constraints

-   `1 <= s.length <= 104`
-   `s consists of only English letters and spaces ' '.`

### Preliminary Solution

-   **Time Complexity**: O(N)
-   **Space Complexity**: O(1)

#### Initial Thoughts

First thought is to start from the end of the string and see where the first empty space is. I also have to account for when there are spaces at the end

#### Solution Code

```js
var lengthOfLastWord = function (s) {
    var lengthLastWord = 0;
    var wordStarted = false;
    for (let i = s.length - 1; i > -1; i--) {
        if (s[i] !== " ") {
            wordStarted = true;
            lengthLastWord++;
        }
        if (s[i] === " " && wordStarted === true) {
            return lengthLastWord;
        }
    }
    return lengthLastWord;
};
```

-   **Time Complexity**: O(N)
-   **Space Complexity**: O(N)

```js
var lengthOfLastWord = function (s) {
    var lengthLastWord = 0;
    var sCopy = s.trim();
    for (let i = sCopy.length - 1; i > -1; i--) {
        if (sCopy[i] !== " ") {
            lengthLastWord++;
        } else break;
    }
    return lengthLastWord;
};
```

#### Notes

-   Came up with two solutions.
    The second function is better. Here are the reasons:

Efficiency: The second function is more efficient because it avoids unnecessary iterations. It first trims the input string to remove any leading or trailing whitespaces and then iterates through the trimmed string only until the end of the last word is found. In contrast, the first function iterates through the entire string until it finds the last word, even if there are many trailing whitespaces.

Simplicity: The second function is simpler because it uses fewer variables and has a clearer logic flow. It also avoids using an additional variable to keep track of whether a word has started, which is not necessary for finding the length of the last word.

I am curious to see an even better solution considering this only beat 49% for time and 78% for space

### Best Solution (https://leetcode.com/problems/length-of-last-word/solutions/2757379/js-99-with-explanation/?languageTags=javascript)

-   **Time Complexity**: O(N)
-   **Space Complexity**: O(1)

#### Solution Code

```js
var lengthOfLastWord = function (s) {
    let trimmedString = s.trim();

    return trimmedString.length - trimmedString.lastIndexOf(" ") - 1;
};
```

#### Notes

-   The trim() method removes whitespace from both ends of a string and returns a new string, without modifying the original string.

After that, we find the index of the last space (i.e., the space before the last word) and subtract this index from the total length of the string, adjusted for the index ("-1").
