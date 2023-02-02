/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function (nums, target) {
    let sum = nums.reduce((per, val) => per + val, 0)
    sum = ((sum + target) / 2)
    function dfs() {
        
      }
}