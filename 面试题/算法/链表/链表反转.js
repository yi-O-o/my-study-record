/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

/**
 * 思想 双指针，通过2个指针 current和prev
 * current指向当前的 prev指向cur前面的那一个
 * 通过current.next = prev 来改变链表的指向
 */
 var reverseList = function(head) {
let current = head
//current前一个
let prev = null
while(current){
    let temp = current.next
    current.next = prev  //改变箭头指向
    //移动temp和cur
    prev = current
    current = temp
}
return prev
};


/**
 * 递归的写法：本质模仿双指针
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var reverseList = function(head) {
    return (reverse(head,null))
};
function reverse(current,prev) { 
    if(!current) return prev
    let temp = current.next
    current.next = prev
    reverse(temp,current)
 }


