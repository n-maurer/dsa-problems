# DATE

4/27/23

# Category

Tree

# Difficulty

Easy

My thoughts:

-

## [589. N-ary Tree Preorder Traversal](https://leetcode.com/problems/n-ary-tree-preorder-traversal/?envType=study-plan&id=level-1)

### Problem

Given the root of an n-ary tree, return the preorder traversal of its nodes' values.

Nary-Tree input serialization is represented in their level order traversal. Each group of children is separated by the null value (See examples)

#### Example 1

```
Input: root = [1,null,3,2,4,null,5,6]
Output: [1,3,5,6,2,4]
```

#### Example 2

```
Input: root = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]
Output: [1,2,3,6,7,11,14,4,8,12,5,9,13,10]
```

#### Constraints

-   `The number of nodes in the tree is in the range [0, 104].`
-   `0 <= Node.val <= 10^4`
-   `The height of the n-ary tree is less than or equal to 1000.`

### Preliminary Solution

-   **Time Complexity**: O(N)
-   **Space Complexity**: O(N)

#### Initial Thoughts

Was a little tricky since I have only done pre order traversal with trees that have a left or right child. Im curious to see a better solution

#### Solution Code

```js
/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

var preorder = function (root) {
    var visited = [];
    var current = root;
    function traverse(node) {
        if (node) {
            visited.push(node.val);
            for (let child of node.children) {
                traverse(child);
            }
        }
    }
    traverse(current);
    return visited;
};
```

#### Notes

-   Anything additional goes here in bullets

### [Best Available Solution](SOLUTION_LINK)

-   **Time Complexity**: O(TIME)
-   **Space Complexity**: O(SPACE)

#### Solution Code

```
SOLUTION CODE GOES HERE
```

#### Notes

-   Anything additional goes here in bullets
