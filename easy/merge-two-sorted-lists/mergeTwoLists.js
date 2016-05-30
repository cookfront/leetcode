/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
	if (l1 !== null && l2 === null) return l1;
	if (l1 === null && l2 !== null) return l2;

	var head = new ListNode();
	var pointer = head;
	while (l1 !== null && l2 !== null) {
		if (l1.val >= l2.val) {
			pointer.next = l2;
			l2 = l2.next;
		} else {
			pointer.next = l1;
			l1 = l1.next;
		}
		pointer = pointer.next;
	}

	pointer.next = (l1 !== null) ? l1 : l2;
	return head.next;
};
