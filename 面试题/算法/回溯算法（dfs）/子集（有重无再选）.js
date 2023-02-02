/**
 * @param {number[]} nums
 * @return {number[][]}
 */
/**
 * 有重   子集和组合   先排序后减枝 
 * 排序 让一样的在一起
 * nums[i] === nums[i-1] 如果这个和前面的树一样就跳过
 */
 var subsetsWithDup = function(nums) {
    nums.sort()
    let result = []
    let t = []
    function dfs(start){
        result.push([...t])
        for(let i =  start ; i < nums.length ; i++){
            if(i > start && nums[i] === nums[i-1]){
                continue
            }
            t.push(nums[i])
            dfs(i + 1)
            t.pop()
        }
    
    }
        dfs(0)
    return result
    };