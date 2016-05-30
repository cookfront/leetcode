var deleteDuplicates = function(head) {
    if (!head || head.next === null) {
        return head;
    }

    var prevNode = head;
    var cur = head && head.next;
    var currVal;
    while (curr && cur.next !== null) {
        currVal = prevNode.val;
        if (cur.val !== currVal) {
            currVal = cur.val;
            prevNode = cur;
            cur = cur.next;
        } else {
            cur = cur.next;
            prevNode.next = cur;
        }
    }

    return head;
};
