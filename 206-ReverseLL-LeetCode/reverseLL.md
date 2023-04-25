# DATE

# Difficulty

Easy

My thoughts:

-   Easy

## [206. Reverse Linked List](https://leetcode.com/problems/reverse-linked-list/?envType=study-plan&id=level-1)

### Problem

Given the head of a singly linked list, reverse the list, and return the reversed list.

#### Example 1

```
Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]
```

#### Example 2

```
Input: head = [1,2]
Output: [2,1]
```

### Example 3

```
Input: head = []
Output: []
```

#### Constraints

-   The number of nodes in the list is the range [0, 5000].
-   -5000 <= Node.val <= 5000

### Preliminary Solution

-   **Time Complexity**: O(N)
-   **Space Complexity**: O(N)

#### Initial Thoughts

I wish they gave me the tail. I should create a dummy Node that is = to head. Edge case, if head is null, return head.

#### Solution Code

```js
var reverseList = function (head) {
    if (!head) return head;

    var prev = new ListNode(head.val, null);

    while (head) {
        var nextNode = head.next;
        if (!nextNode) {
            return prev;
        }
        var current = new ListNode(nextNode.val);
        current.next = prev;
        prev = current;
        head = head.next;
    }
    return prev;
};
```

#### Notes

-   Took alot of playing around but I got it. prev needed to be a ListNode. I was just setting it equal to head. It was messing things up.
-   There is a better way to do this. Every time I go through the list, I create a new ListNode, when I could just be changing the original

### [Best Available Solution](SOLUTION_LINK)

-   **Time Complexity**: O(N)
-   **Space Complexity**: O(1)

#### Solution Code

```js
var reverseList = function (head) {
    var prev = null;
    while (head) {
        var nextNode = head.next;
        head.next = prev;
        prev = head;
        head = nextNode;
    }
    return prev;
};
```

#### Notes

-   In this code, the prev variable starts as null, and each node's next pointer is updated to point to the previous node. At the end of each iteration, the prev variable is updated to be the current node, and the head variable is updated to be the next node in the original list.
