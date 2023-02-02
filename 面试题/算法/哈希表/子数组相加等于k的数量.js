/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var subarraysDivByK = function(nums, k) {
     //数组前面的和
    let pvr = 0
    let count = 0
    let map = new Map()
    map.set(0,1)
    for(let i = 0; i<nums.length; i++){
        pvr += nums[i]
        if(map.has(pvr - k)){
            count += map.get(pvr -k)
        }
        map.set(pvr,((map.get(pvr) || 0)+ 1))
    }
    return count
};

console.log(subarraysDivByK([1],0));

