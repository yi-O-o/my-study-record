/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
 var deleteNode = function(head, val) {
    let current = head
    let prev = null
    while(current.val != val){
        prev = current
        current = current.next
    }
    prev.next = current.next
    return current
};