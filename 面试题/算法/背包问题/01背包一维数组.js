let weight = [1, 3, 4]
let value = [15, 20, 30]
let bagWeight = 4

function canPartition(weight,value,bagWeight) { 
    let n = weight.length
    let m = value.length
    let dp = new Array(bagWeight + 1).fill(0)
    //初始化
    for(let i = bagWeight ; i >= weight[0] ; i--){
        dp[i] = value[0]
    }

    //开始遍历
    //一定要先是物品
    for(let i = 0 ; i<  weight.length ; i++){
        //第二个是背包 但是一定要倒叙
        for(let j = bagWeight ; j > 0 ; j--){
            if(j >= weight[i]){
                dp[j] = Math.max(dp[j],dp[j-weight[i]] + value[i])
            }
        }
    }
    console.log(dp)
 }

canPartition(weight,value,bagWeight)