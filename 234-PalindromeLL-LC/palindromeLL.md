# DATE

4/24/23

# Category

Linked List

# Difficulty

Easy

My thoughts:

-

## [234. Palindrome Linked List](https://leetcode.com/problems/palindrome-linked-list/)

### Problem

Given the head of a singly linked list, return true if it is a
palindrome
or false otherwise.

#### Example 1

```
Input: head = [1,2,2,1]
Output: true
```

#### Example 2

```
Input: head = [1,2]
Output: false
```

#### Constraints

-   `The number of nodes in the list is in the range [1, 105]`
-   `0 <= Node.val <= 9`

### Preliminary Solution

-   **Time Complexity**: O(N)
-   **Space Complexity**: O(N)

#### Initial Thoughts

My first thought is to get the length of the LL, check if the left to middle is equal to right to middle.
Time to restart! My plan I forgot to check the second half going backwards. I would really like to do this without creating any new data
I wanted to avoid creating a seperate array because I feel like the defeats the purpose of using a LL.
I have a solution with O(N) time but also O(N) space. I know there is a solution with O(1) space.

#### Solution Code

```js
var isPalindrome = function (head) {
    var linkedListLength = 0;

    var llArr = [];

    let current = head;
    while (current) {
        llArr.push(current.val);
        linkedListLength++;
        current = current.next;
    }

    let i = 0;
    let j = linkedListLength - 1;

    if (linkedListLength % 2 === 1) {
        while (i < j - 1) {
            if (llArr[i] !== llArr[j]) {
                return false;
            }
            i++;
            j--;
        }
    } else {
        while (i < j) {
            if (llArr[i] !== llArr[j]) {
                return false;
            }
            i++;
            j--;
        }
    }
    return true;
};
```

### [Best Available Solution](https://www.youtube.com/watch?v=yOzXms1J6Nk)

-   **Time Complexity**: O(N)
-   **Space Complexity**: O(1)

#### Solution Code

```js
var isPalindrome = function (head) {
    var fast = head;
    var slow = head;

    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
    }

    var prev = null;
    while (slow) {
        let tmp = slow.next;
        slow.next = prev;
        prev = slow;
        slow = tmp;
    }

    [left, right] = [head, prev];
    while (right) {
        if (left.val !== right.val) {
            return false;
        }
        left = left.next;
        right = right.next;
    }
    return true;
};
```

#### Notes

-   Anything additional goes here in bullets
