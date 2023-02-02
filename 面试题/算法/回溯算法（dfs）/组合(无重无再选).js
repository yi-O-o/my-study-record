/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
 var combine = function(n, k) {
    let result = []
    let t = []
    function dfs(num){
    if(t.length === k){
        result.push([...t])
        return
    }
    for(let i = num ; i <= n ; i++){
        t.push(i)
        dfs(i+1)
        t.pop()
    }
    }
    dfs(1)
    return result
    };
    let n = 4
    let k = 2
console.log(    combine(n,k));