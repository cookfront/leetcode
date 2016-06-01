/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    var result = [];
    var tmp = [];
    traverse(root);
    return result;

    function traverse(node) {
        if (!node) {
            return;
        }

        tmp.push(node.val);

        // 叶子节点
        if (!node.left && !node.right) {
            result.push(tmp.join('->'));
        } else {
            traverse(node.left);
            traverse(node.right);
        }

        tmp.pop();
    }
};
