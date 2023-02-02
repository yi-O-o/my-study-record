/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 * 
 * 用快慢指针
 */
 var getKthFromEnd = function(head, k) {
    let fastNode = head
    let slowNode = head
    while(k > 0){
        fastNode = fastNode.next
        k--
    }
    while(fastNode){
        fastNode = fastNode.next
        slowNode = slowNode.next
    }
    return slowNode
};
