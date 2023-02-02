/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var findKthLargest = function(nums, k) {
  querySort(nums,0,nums.length -1)
  console.log(nums);
  return nums[nums.length - k]
};
function querySort(arr,low,high){
  let left = low
  let right = high
  let prev = arr[left]
  if(left >= right){
    return
  }
  while(left < right){
    while(left < right && arr[right] >= prev ){
      right--
    }
    if(left < right){
      arr[left++] = arr[right]
    }
    while(left < right && arr[left] < prev){
      left++
    }
    if(left < right){
      arr[right--] = arr[left]
    }
  }
  arr[left] = prev
  querySort(arr,low,left - 1)
  querySort(arr,left+1,high)
}
console.log(findKthLargest([3,2,3,1,2,4,5,5,6],9));