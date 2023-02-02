/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
 var levelOrder = function(root) {
    let que = []
    let res= [] 
    if(root === null){
        return res
    }
    que.push(root)
    while(que.length != 0){
        let curArr = []
        let curLength  = que.length
        for(let i = 0 ; i < curLength ;i++){
            root = que.shift()
            curArr.push(root.val)
            for(let ch of root.children){
                que.push(ch)
            }
        }
        res.push(curArr)
    }
    return res
};