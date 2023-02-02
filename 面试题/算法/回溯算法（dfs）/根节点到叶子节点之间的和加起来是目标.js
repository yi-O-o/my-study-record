/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} target
 * @return {number[][]}
 */
 var pathSum = function (root, target) {
    let result = []
    let res = []
    dfs(root, 0)
    return result
    function dfs(root, sum) {
        if (root == null) {
            return
        }
        sum += root.val
        res.push(root.val)
        if (sum == target && root.left == null && root.right == null) {
            result.push([...res])
        }
        dfs(root.left, sum)
        dfs(root.right, sum)
        res.splice(res.length - 1, 1)
    }
};