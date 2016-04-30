/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
    if (node) {
        var next = node.next;
        node.val = next && next.val;
        node.next = next && next.next;
    }
};
