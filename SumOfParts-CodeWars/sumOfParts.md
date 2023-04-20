# DATE

4/20/23

# Category

# Difficulty

6kyu

My thoughts:

-

## [Sums of Parts](https://www.codewars.com/kata/5ce399e0047a45001c853c2b/train/javascript)

### Problem

Let us consider this example (array written in general format):

ls = [0, 1, 3, 6, 10]

Its following parts:

ls = [0, 1, 3, 6, 10]
ls = [1, 3, 6, 10]
ls = [3, 6, 10]
ls = [6, 10]
ls = [10]
ls = []
The corresponding sums are (put together in a list): [20, 20, 19, 16, 10, 0]

The function parts_sums (or its variants in other languages) will take as parameter a list ls and return a list of the sums of its parts as defined above.

#### Example 1

```
ls = [1, 2, 3, 4, 5, 6]
parts_sums(ls) -> [21, 20, 18, 15, 11, 6, 0]

```

#### Example 2

```
ls = [744125, 935, 407, 454, 430, 90, 144, 6710213, 889, 810, 2579358]
parts_sums(ls) -> [10037855, 9293730, 9292795, 9292388, 9291934, 9291504, 9291414, 9291270, 2581057, 2580168, 2579358, 0]
```

### Preliminary Solution

-   **Time Complexity**: O(N)
-   **Space Complexity**: O(N)

#### Initial Thoughts

So my initial thought is how can I so this without removing elements from the front of the array since that would have to re-index every element.

Going to try a sliding window approach

It will always end in 0, so I should increase i until it is = ls.length

#### Solution Code

```js
function partsSums(ls) {
    var returnArr = [];
    var lsSum = 0;
    for (let num of ls) lsSum += num;
    var i = 0;
    while (i <= ls.length) {
        returnArr.push(lsSum);
        lsSum -= ls[i];
        i++;
    }
    return returnArr;
}
```

#### Notes

-   I have learned that it is beneficial to create a new Array rather than creating an empty on and pushing to it

-   **Time Complexity**: O(N)
-   **Space Complexity**: O(N)

#### Solution Code

```js
function partsSums(ls) {
    const n = ls.length;
    const result = new Array(n + 1);
    result[n] = 0;
    for (let i = n - 1; i >= 0; i--) {
        result[i] = result[i + 1] + ls[i];
    }
    return result;
}
```
