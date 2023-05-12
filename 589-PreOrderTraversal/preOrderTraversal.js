/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
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
