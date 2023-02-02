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
 *思路：用层次遍历
 *1.查看节点的左子节点没有右子节点右的话 不是完全二叉树
 *得到第一个叶子节点的前一个节点 然后看后面的叶子节点是不是都没有左右子节点
 * 查看节点的左右字节点是不是
 */
 function isCompleteTree( root ) {
    let bool = false
    //队列
    let queue = []
    queue.push(root)
    while(queue.length != 0){
     root = queue.shift()
     if(
        (bool && (root.left != null || root.right !=null ))
        ||
        (root.right && root.left == null)
     ){
        return false
     }
    
     if(root.left){
        queue.push(root.left)
     }
     if(root.right){
        queue.push(root.right)
     }
     if(root.left == null || root.right == null){
        bool = true
     }
     return true
    }
}
module.exports = {
    isCompleteTree : isCompleteTree
};