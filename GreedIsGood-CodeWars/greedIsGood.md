# DATE

3/30/23

# Difficulty

5 kyu

My thoughts:

-

## [Greed is Good](https://www.codewars.com/kata/5270d0d18625160ada0000e4/train/javascript)

### Problem

Greed is a dice game played with five six-sided dice. Your mission, should you choose to accept it, is to score a throw according to these rules. You will always be given an array with five six-sided dice values.

Three 1's => 1000 points
Three 6's => 600 points
Three 5's => 500 points
Three 4's => 400 points
Three 3's => 300 points
Three 2's => 200 points
One 1 => 100 points
One 5 => 50 point

A single die can only be counted once in each roll. For example, a given "5" can only count as part of a triplet (contributing to the 500 points) or as a single 50 points, but not both in the same roll.

#### Example 1

```
 Throw       Score
 ---------   ------------------
 5 1 3 4 1   250:  50 (for the 5) + 2 * 100 (for the 1s)
 1 1 1 3 1   1100: 1000 (for three 1s) + 100 (for the other 1)
 2 4 4 5 4   450:  400 (for three 4s) + 50 (for the 5)
```

### Preliminary Solution

-   **Time Complexity**: O(N)
-   **Space Complexity**: O(N)

#### Initial Thoughts

Initial thought is to put all the possible scores in an object. Check the amount of every number in the roll. Match them to a key in the object. Return max

#### Solution Code

```js
function score(dice) {
    var total = 0;
    dyeFrequency = {};
    for (let dye of dice) {
        dyeFrequency[dye] = (dyeFrequency[dye] || 0) + 1;
    }
    var diceCombos = {
        "3:1": 1000,
        "3:6": 600,
        "3:5": 500,
        "3:4": 400,
        "3:3": 300,
        "3:2": 200,
        "1:1": 100,
        "1:5": 50,
    };

    for (let dye in dyeFrequency) {
        console.log(dyeFrequency);
        if (dyeFrequency[dye] === 5) {
            if (`1:${dye}` in diceCombos) {
                total += 2 * diceCombos[`1:${dye}`];
                dyeFrequency[dye] -= 2;
            } else {
                dyeFrequency[dye] -= 2;
            }
        } else if (dyeFrequency[dye] === 4) {
            if (`1:${dye}` in diceCombos) {
                total += diceCombos[`1:${dye}`];
                dyeFrequency[dye] -= 1;
            }
        }
        console.log(dyeFrequency);
        if (dyeFrequency[dye] === 3) {
            total += diceCombos[`3:${dye}`];
        }

        if (dyeFrequency[dye] === 2) {
            if (`1:${dye}` in diceCombos) {
                total += 2 * diceCombos[`1:${dye}`];
            }
        } else if (dyeFrequency[dye] === 1) {
            if (`1:${dye}` in diceCombos) {
                total += diceCombos[`1:${dye}`];
            }
        }
    }
    return total;
}
```

#### Notes

-   Pretty bad solution. I want to see how we can refactor

### [Best Available Solution](SOLUTION_LINK)

-   **Time Complexity**: O(TIME)
-   **Space Complexity**: O(SPACE)

#### Solution Code

```
SOLUTION CODE GOES HERE
```

#### Notes

-   Anything additional goes here in bullets
