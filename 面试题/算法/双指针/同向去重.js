var removeDuplicates = function(nums) {
    let left = 0
    let right = 1
    while(right < nums.length){
        if(nums[left] != nums[right]){
            left++
            right++
        }else{
            nums.splice(left,1)
        }
    }
    return nums
};
console.log(removeDuplicates([1,1,2,2,3,5,67]));
