/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if (!root || (!root.left && !root.right)) {
        return root;
    }

    var tmp = root.left;
    root.left = root.right;
    root.right = tmp;
    root.left = invertTree(root.left);
    root.right = invertTree(root.right);
    return root;
};
