
/**
 * @param {string} s
 * @return {string[]}
 */


/**
 * 排列 如果无重无可用要把user设置了 要看那元素一个用过了 不能再用了
 * 有重复 先排序 后减枝
 * 减枝 要先看看前面的和这个元素一样不 然后看前面的被用过没有如果用过了就不跳过 ，没有用过就跳过
 */
let s = '123'
 var permutation = function(s) {
    s = s.split("").sort().join("")
    let result = []
    let user = []
    let str = ""
    function dfs(){
        if(str.length === s.length){
            result.push(str)
            return
        }
        for(let i = 0 ; i <s.length ; i++){
            if(user[i]){
                continue
            }
            // if(i > 0 && s[i] === s[i-1] && !user[i-1]){
            //     continue
            // }
          
            user[i] = true
            str +=  s[i]
            dfs()
            str =  str.slice(0,str.length -1)
            user[i] = false 
        }
    }
    dfs()
    return result
};
console.log(permutation(s));
