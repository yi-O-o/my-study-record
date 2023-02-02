/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 * 用队列放index
 */
var maxSlidingWindow = function (nums, k) {
    let res = [];
    let que = [];
    let l = 0;
    let r = 0;
    while (r < nums.length) {
      while (nums[r] > nums[que[que.length - 1]] && que.length != 0) {
        que.pop();
      }
      que.push(r);
      if (r - k + 1 === l) {
        res.push(nums[que[0]]);
        if (que[0] === l) {
          que.shift();
        }
        l++;
      }
      r++;
    }
    return res;
  };
  console.log(maxSlidingWindow([9, 10, 9, -7, -4, -8, 2, -6], 5));
  