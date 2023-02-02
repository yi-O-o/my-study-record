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
 * @return int整型二维数组
 */

/**
 * 用队列 一层一层的遍历 就是
 * 把左边的进去 然后吧右边的进去
 * 弹出节点 然后收集起来
 * 循环
 *
 */
var levelOrder = function (root) {
  let que = []
  let res = []
  if (root === null) {
      return res
  }
  que.push(root)
  while (que.length != 0) {
      let cur = que.length
      for (let i = 0; i < cur; i++) {
          root = que.shift()
          res.push(root.val)
          if (root.left) {
              que.push(root.left)
          }
          if (root.right) {
              que.push(root.right)
          }
      }
  }
  return res;
};
module.exports = {
  levelOrder: levelOrder,
};
