function Node(val,children) {
    this.val = val
    this.children = children
  }
function qianxu(root) { 
    let result = []
    help(root)
    function help(root) { 
        if(root === null){
            return  
        }
        result.push(root.val)
        for(let ch of root.children){
            help(ch)
        }
     }
     return result
 }