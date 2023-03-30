# DATE

# Difficulty

Easy

My thoughts:

-   Easy

## [876. Middle of the Linked List](https://leetcode.com/problems/middle-of-the-linked-list/description/?envType=study-plan&id=level-1)

### Problem

Given the head of a singly linked list, return the middle node of the linked list.

If there are two middle nodes, return the second middle node.

#### Example 1

```
Input: head = [1,2,3,4,5]
Output: [3,4,5]
Explanation: The middle node of the list is node 3.
```

#### Example 2

```
Input: head = [1,2,3,4,5,6]
Output: [4,5,6]
Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.
```

#### Constraints

-   The number of nodes in the list is in the range [1, 100].
-   1 <= Node.val <= 100

### Preliminary Solution

-   **Time Complexity**: O(N)
-   **Space Complexity**: O(1)

#### Initial Thoughts

Initial thought was to take the length, divide by two, and find the Node at that index. This linked list does not include the length, so I had to do it on my own.

#### Solution Code

```js
var middleNode = function (head) {
    //make a var set to the head
    var currentNode = head;
    //var len so we can find the length of the LL
    var len = 0;
    //Iterate through the LL and get the length
    while (currentNode) {
        len++;
        currentNode = currentNode.next;
    }
    //Find the middle of the LL length. Ex: middle of 5 is 3
    var middle = Math.floor(len / 2) + 1;
    //again iterate through LL
    currentNode = head;
    //new length to see if were at the middle
    newLen = 0;
    while (currentNode) {
        newLen++;
        //is length = middle?
        if (newLen === middle) {
            return currentNode;
        }
        //if not, iterate to next node
        currentNode = currentNode.next;
    }
};
```

#### Notes

-   It gets a little confusing doing length and finding the Node at that length. It makes more sense if you do index. I'll take a look and see what I find

### [Best Available Solution](SOLUTION_LINK)

-   **Time Complexity**: O(N) \*This one is same complexity as one above but is technically faster because it only goes throught the list once
-   **Space Complexity**: O(1)

#### Solution Code

```js
var middleNode = function (head) {
    var slow = head;
    var fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
};
```

#### Notes

-   In this code, the slow pointer moves one node at a time, while the fast pointer moves two nodes at a time. When the fast pointer reaches the end of the linked list, the slow pointer will be pointing to the middle node.
