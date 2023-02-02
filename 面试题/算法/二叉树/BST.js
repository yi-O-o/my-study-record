/**
 * 二叉搜索树 性质 左边比跟节点小 右边比跟节点大
 */
class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  //插入节点
  insert(val) {
    let newNode = new Node(val);
    //查看有没有跟绩点
    if (this.root) {
      insertNode(this.root, newNode);
    } else {
      this.root = newNode;
    }
    function insertNode(node, newNode) {
      if (node.val > newNode.val) {
        //放左边
        if (node.left == null) {
          node.left = newNode;
        } else {
          insertNode(node.left, newNode);
        }
      } else {
        if (node.right == null) {
          node.right = newNode;
        } else {
          insertNode(node.right, newNode);
        }
      }
    }
  }
  //先序遍历（递归）
  // preorderTraversal(){
  //     let arr = []
  //     preorderTraversalNode(this.root,arr)
  //     return arr
  //     function preorderTraversalNode(node,arr) {
  //         if(node == null) return
  //         arr.push(node.val)
  //         preorderTraversalNode(node.left,arr)
  //         preorderTraversalNode(node.right,arr)
  //     }
  // }

  //
  /**
   * 先序遍历非递归 （头左右）
   * 思路：1.先把头节点放入
   * 这里弹出了头
   *
   * 2.弹出节点 打印
   * 3.然后查看右节点是不是有 有的话压入
   * 4.然后看左节点是不是有 有的话压入
   *这里其实是右左 然后出来就是左右
   *
   */
  preorderTraversal(root) {
    let arr = [];
    if (root != null) {
      //栈
      let stack = [];
      stack.push(root);
      while (stack.length !== 0) {
        //出栈
        root = stack.pop();
        arr.push(root.val);
        if (root.right) {
          stack.push(root.right);
        }
        if (root.left) {
          stack.push(root.left);
        }
      }
    }
    return arr;
  }

  /** 
   * 后续遍历非递归
   * 后续是左右头 入栈的顺序应该是头左右
   * 先左再右
   * 然后再入一个栈弹出就是左右头
   *
   * 思路1.加入头 然后进入第一个栈
   * 再弹出第一个栈，进入收集栈
   * 然后再左再右
   */
  postorderTraversal(root) {
    let stack2 = [];
    if (root) {
      let stack1 = [];
      stack1.push(root);
      while (stack1.length == 0) {
        root = stack1.pop();
        stack2.push(root.val);
        if (root.left) {
          stack1.push(root.left);
        }
        if (root.right) {
          stack1.push(root.right);
        }
      }
    }
    return stack2.reverse();
  }

  //中序遍历非递归
  /**
   * 中序是 左头右 因为二叉树可以变成左树 其实就是 左头这样子 右子树 又可以分解成左头
   * 思路：
   * 1.所有的左边界节点进栈
   * 2.弹出并打印 然后把弹出的右树拿他的所有左边界
   */
  inorderTraversal(root) {
    let arr = [];
    if (root) {
      let stack = [];
      while (stack.length !== 0 || root != null) {
        //把所有的左边界放入栈中
        if (root) {
          stack.push(root);
          root = root.left;
        } else {
          //这里就是说明左边到头了
          root = stack.pop();
          arr.push(root.val);
          root = root.right;
        }
      }
    }
    return arr;
  }
}

let BinarySearchTree1 = new BinarySearchTree();
BinarySearchTree1.insert(8);
BinarySearchTree1.insert(3);
BinarySearchTree1.insert(9);
BinarySearchTree1.insert(10);
BinarySearchTree1.insert(1);
BinarySearchTree1.insert(13);
console.log(BinarySearchTree1.preorderTraversal(8));
