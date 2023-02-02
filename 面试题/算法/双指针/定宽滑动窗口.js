// 求解长度为 n 的数组 nums 中，长度为 k 的最大子数组之和
//窗口大小 left = i right = k + i
function getMaxSum1(nums, k) {
    //前缀和数组
    let preSum = []
    let maxRes = 0
    for (let i = 0; i < nums.length; i++) {
        if(i ==0){
            preSum.push(nums[0])
        }else{
            let n = preSum.length - 1
            preSum.push(preSum[n] + nums[i])
        }
    }
    console.log(preSum);

    //这里算
    for(let i =0;i<preSum.length - k;i++){
       maxRes =  Math.max(maxRes,preSum[i+k] - preSum[i])
    }
    return maxRes
}
console.log(getMaxSum1([1,2,3,4,5],2));
