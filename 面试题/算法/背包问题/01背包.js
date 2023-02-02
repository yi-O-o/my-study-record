let weight = [1, 3, 4]
let value = [15, 20, 30]
let bagWeight = 4
bags(weight, value, bagWeight)
function bags(weight, value, bagWeight) {
    let n = weight.length
    //建立dp数组 要长度都是0开始 
    let dp = new Array(n).fill([]).map(() => new Array(bagWeight + 1).fill(0))
    //初始化dp 
    for (let j = bagWeight; j >= weight[0]; j--) {
        dp[0][j] = dp[0][j - weight[0]] + value[0]
    }
    // i表示的是物品任取放入容量位j的背包
    for (let i = 1; i < n; i++) {
        //遍历背包重量从1开始
        for (let j = 1; j <= bagWeight; j++) {
            if (j < weight[i]) {
                dp[i][j] = dp[i - 1][j]
            } else {
                dp[i][j] = Math.max(dp[i - 1][j - weight[i]] + value[i], dp[i - 1][j])
            }
        }
    }
    console.log(dp);
}