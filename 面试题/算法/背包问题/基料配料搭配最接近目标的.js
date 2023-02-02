function closestCost(baseCosts, toppingCosts, target) {
    //那到最小的基料
    let min = Math.min(...baseCosts)
    if (min >= target) {
        return min
    }
    let can = new Array(target + 1).fill(false)
    let res = 2 * target - min
    //看基料有没有超过目标
    for (let base of baseCosts) {
        if (base <= target) {
            can[base] = true
        } else {
            res = Math.min(res, base)
        }
    }

    //遍历商品
    for (let to of toppingCosts) {
        for (let count = 0; count < 2; count++) {
            //遍历背包
            for (let j = target; j >= 1; j--) {
                //如果base加上基料大于目标
                if (can[j] && to + j > target) {
                    res = Math.min(to + j, res)
                }
                //如果有2份基料的话 上一份合法 则这一份也合法
                if (j - to > 0) {
                    can[j] = Boolean(can[j]) | Boolean(can[j - to])
                }
            }
        }
        console.log(can)
    }
    //先找比tager小的方案 因为res是比target大的最佳方案了 然后他以target对称 比res和目标的差值小的一定是res - target + 1
    for (let i = 0; i < res - target + 1; i++) {
        //从差值最小的开始找
        if (can[target - i]){
            return target -i
        }
    }
    return res
}
closestCost([1,7],[3,4],10)
