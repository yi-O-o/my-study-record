/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */

/**
 * 思路：用树形PD（递归）
 * 因为就一种满足的情况就是
 * 1.左子树是平衡二叉树 右子树也是
 * 2.左子树的高度和右子树的差值不能超过1
 * 
 * 所以要知道 左子树的 高度 是不是平衡二叉树 右子树的高度 是不是平衡二叉树
 * 
 */
function IsBalanced_Solution(pRoot)
{
    return isBST(pRoot).isB
}

function isBST(node){
    if(node == null){
        return {isB:true,height:0}
    }

    //黑盒
    let leftDate = isBST(node.left)
    let rightDate = isBST(node.right)

    //得到高度
    let height = Math.max(leftDate.height,rightDate.height) + 1

    //查看是不是平衡树 
    let isB = 
    (leftDate.isB && rightDate.isB) 
    &&
    (Math.abs(rightDate.height - leftDate.height) < 2)  

    return {isB,height}
}
module.exports = {
    IsBalanced_Solution : IsBalanced_Solution
};