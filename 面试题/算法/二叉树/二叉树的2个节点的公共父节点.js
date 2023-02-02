/*
 * function TreeNode(x) {
 *   this.val = x;
 *   this.left = null;
 *   this.right = null;
 * }
 */

/**
 *
 * @param root TreeNode类
 * @param o1 int整型
 * @param o2 int整型
 * @return int整型
 */

/**
 * 用map记录每一个节点和父节点的值
 * 然后把o1的那一条链放入set中set1
 * 然后放入o2到set2中每一次set2放一次就检查一次看看o1中有没有她要放的值
 */
//  function lowestCommonAncestor( root ,  o1 ,  o2 ) {
//     let map = new Map()
//     map.set(root.val,root.val)
//     process(root,map)
//     let set1 = new set()
//     let cur = o1
//什么时候cur == 他的父亲 就是头结点的时候 这一句就是让他一直往上
//     while(cur != map.get(cur){
//         set1.add(cur)
//         cur = map.get(cur)
//     }
//     set1.add(root.val)
//     cur = o2
//     while(cur){
//         if(set1.has(cur)){
//             return cur
//         }

//         cur = map.get(cur)
//     }
// }

// function process(node,map) {
//     if(node == null){
//         return
//     }
//     if(node.left){
//         map.set(node.left.val,node)
//     }
//     if(node.right){
//         map.set(node.right.val,node)
//     }
//     process(node.left,map)
//     process(node.right,map)
// }

/**
 * 最强优化
 * 第一种情况 o1和o2的公共节点就是o1或者o2
 * 第二种情况 o1和o2有交汇点 公共祖先不是o1或者o2
 */

function lowestCommonAncestor(root, o1, o2) {
  //这里就是如果在往下找的时候找到o1或者o2或者变成空直接返回
  if (root == o1 || root == null || root == o2) {
    return root;
  }
  let left = lowestCommonAncestor(root.left, o1, o2);
  let right = lowestCommonAncestor(root.right, o1, o2);
  //这里把o1和o2汇在那一个点聚的把那一个点向上传
  if (left != null && right != null) {
    return root;
  }
  //这里就是向上传的代码
  return (  left != null ? left : right);
}
module.exports = {
  lowestCommonAncestor: lowestCommonAncestor,
};
