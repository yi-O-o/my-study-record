/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
/**
 * 可再用就让start等于i这样就可以把自己也选中了
 */
 var combinationSum = function(candidates, target) {
     let result = []
    let sum = 0
    let t = []
    function dfs() {
        if(sum === target){
            result.push([...t])
            return
        }   
        if(sum > target){
            return
        }
        for(let i = 0 ; i < candidates.length ; i++){
            t.push(candidates[i])
            sum += candidates[i]
            //重点
            dfs()
            t.pop()
            sum -= candidates[i]
        }

      }
      dfs()
      return result
};
console.log(combinationSum([2,1,3],35));