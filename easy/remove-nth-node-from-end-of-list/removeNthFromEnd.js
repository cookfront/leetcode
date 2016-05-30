/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    var dumpy = new ListNode();
    dumpy.next = head;
    var probe = dumpy;
    var p = dumpy;
    for (var i = 0; i < n; i++) probe = probe.next;
    while (probe && probe.next) {
        probe = probe.next;
        p = p.next
    }
    p.next = p.next && p.next.next;
    return dumpy.next;
};