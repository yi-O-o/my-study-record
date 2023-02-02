var canPartition = function(nums) {
    let n = nums.length
    let sum = 0
    nums.forEach(item => {
        sum += item
    })
    let target = Math.floor(sum / 2)
    let dp = new Array(n).fill([]).map(() => new Array(target + 1).fill(0))
    for(let j = target ; j >= nums[0] ; j--){
        dp[0][j] = nums[0]
    }
    for(let i = 1 ; i < nums.length;i++){
        for(let j = 0 ; j <= target ;j++){
            if(j < nums[i]){
                dp[i][j] = dp[i-1][j]
            }else{
                dp[i][j] = Math.max(dp[i-1][j - nums[i]]+nums[i],dp[i-1][j])
            }
        }
    }
    console.log(dp)
};
canPartition([2,7,4,1,8,1])