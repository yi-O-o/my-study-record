/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */

/**
 * 用set找焦点  时间复杂度O(M+N) 空间 O（N）
 */
//  var getIntersectionNode = function(headA, headB) {
//     let set = new Set()
//     let temp = headA
//     while(temp){
//         set.add(temp)
//         temp = temp.next
//     }
//     temp = headB
//     while(temp){
//         if(set.has(temp)){
//             return temp
//         }else{
//             temp = temp.next
//         }
//     }
//     return null
// };


/**
 * 用双指针
 * 给HA 一个pA的指针 个HB一个pB的指针
 * 如果pA到HA的尾巴n的时候 就指向HB的开始
 * HB同理
 * 因为2个有交集终有一个位置是指针到尾的位置是一样大的
 * 2个指针一直这样就可以找到那一个位置 那一个位置的值就是交点
 * 如果都没有就null
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
 var getIntersectionNode = function(headA, headB) {
    if (headA === null || headB === null) {
        return null;
    }
    let pA = headA
    let pB = headB
    //如果没有交集都会变成pA指向null返回pB指向null
    while(pA != pB){
        pA  = pA == null ? headB : pA.next
        pB  = pB == null ? headA : pB.next
    }
    return pA
};