/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {
   let sortNums = nums.sort((a,b) => a-b)
   let left = 0
   let right = nums.length - 1
  while(left <= right){
    let mid = Math.floor((right+left) / 2)
    if(target < nums[mid]){
        right = mid -1
    }else if(target > nums[mid]){
      left = mid + 1
    }else{
      return mid
    }
  }
  return -1 
};
console.log(search([1],1));