/*
 * function TreeNode(x) {
 *   this.val = x;
 *   this.left = null;
 *   this.right = null;
 * }
 */
/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param root TreeNode类
 * @return bool布尔型
 */

/**
 * 思路：通过中序遍历 来对比前一个节点是不是小于这节点 如果是则是搜索树
 */
//  function isValidBST( root ) {
//    //建立一个栈
//    let stock = []
//    let prev = -1
//    while(stock.length != 0 || root != null ){
//     if(root){
//         stock.push(root)
//         root = root.left
//     }else{
//        root =  stock.pop()
//        if(root.val > prev){
//         prev = root.val
//        }else{
//         return false
//        }
//         root = root.right
//     }
//    }
//    return true
// }

/**
 *
 * 递归
 */
// function isValidBST(root) {
//   let prev = -1;
//   order(root);
//   function order(node) {
//     if (node == null) return ture;
//     let isLeft = order(node.left);
//     if (!isLeft) {
//       return false;
//     }
//     if (node.val > prev) {
//       prev = node.val;
//     }else{
//          return false
//     }
//     return order(node.right);
//   }
// }

/*
 * function TreeNode(x) {
 *   this.val = x;
 *   this.left = null;
 *   this.right = null;
 * }
 */
/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 
 * @param root TreeNode类 
 * @return bool布尔型
 */


/**
 * 思路：用树形DP
 * 可能是 左右子树都是搜索树 左子树的最大值小于node 右子树的最小值大于node
 * 返回 是否是搜索树 左子树的最大值 右子树的最小值
 * 
 */
 function isValidBST( root ) {
  return isB(root).isBST
}
function isB(root) {
  if(root == null){
    return null
  }
  let leftDate =  isB(root.left)
  let rightDate =  isB(root.right)
  let min = root.val
  let max = root.val
  if(leftDate){
    max = Math.max(leftDate.max,root.val)
    min = Math.max(leftDate.min,root.val)
  }
  if(rightDate){
    max = Math.max(rightDate.max,root.val)
    min = Math.max(rightDate.min,root.val)
  }

  let isBST = true
  if(leftDate && (!leftDate.isBST || leftDate.max >= root.val) ){
    isBST = false
  }
  if(!(rightDate && (!rightDate.isBST && rightDate.min <= root.val) )){
    isBST = false
  }
  return {isBST,max,min}
  }


module.exports = {
  isValidBST: isValidBST,
};
