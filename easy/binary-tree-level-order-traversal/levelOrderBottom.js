/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
var getMaxHeight = function(root) {
	if (!root) {
		return 0;
	} else {
		return Math.max(getMaxHeight(root.left), getMaxHeight(root.right)) + 1;
	}
};

var travel = function(root, height) {
	if (!root) {
		return [];
	}

    var arr = [];
	if (height === 1) {
		arr.push(root.val);
		return arr;
	}

    return [].concat(travel(root.left, height - 1), travel(root.right, height - 1));
}

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
    var maxHeight = getMaxHeight(root);
    var result = [];
    for (var i = maxHeight; i >= 1; i--) {
    	var arr = travel(root, i);
    	result.push(arr);
    }

    return result;
};
