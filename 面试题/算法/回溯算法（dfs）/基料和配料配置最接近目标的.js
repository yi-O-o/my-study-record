/**
 * @param {number[]} baseCosts
 * @param {number[]} toppingCosts
 * @param {number} target
 * @return {number}
 */
 var closestCost = function (baseCosts, toppingCosts, target) {
    let min = Math.min(...baseCosts)
    if (min >= target) {
        return min
    }
    let res = min
    for (baseCost of baseCosts) {
        dfs(toppingCosts, 0, baseCost, target)
    }
    return res
};
function dfs(toppingCosts, idx, baseC, target) {
    //当前的成本比我们最优的成本与目标差更大就没有必要算下去了
    //为什么这里不给绝对值 因为 如果当前的成本和目标差对比，如果比目标小 则还有增加的可能
    if (baseC - target > Math.abs(res - target)) {
        return
    }
    //当前的成本与目标差小或者等于 等于可能是成本高所以则就判断
    if (Math.abs(baseC - target) <= Math.abs(res - target)) {
        if (Math.abs(baseC - target) < Math.abs(res - target)) {
            res = baseC
        } else {
            res = Math.min(res, baseC)
        }
    }
    //递归终止
    if (idx >= toppingCosts.length) {
        return
    }
    dfs(toppingCosts, idx + 1, baseC, target) //什么都不配置
    dfs(toppingCosts, idx + 1, baseC + toppingCosts[idx], target) //配置一个
    dfs(toppingCosts, idx + 1, baseC + toppingCosts[idx] * 2, target) //配置2个
}
