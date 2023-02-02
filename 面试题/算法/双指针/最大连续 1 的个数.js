let nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1]
let k = 3
let left = 0
let maxNum = 0
let right = 0
let zero = 0
while (left < nums.length && right < nums.length) {
  if (zero > k) {
    maxNum = Math.max(maxNum, right - left)
    left++
    if(nums[left] == 0){
      zero--
    }
  } else {
    if (nums[right] == 0) {
      zero++
      right++
    } else {
      right++
    }
  }
}
console.log(maxNum);