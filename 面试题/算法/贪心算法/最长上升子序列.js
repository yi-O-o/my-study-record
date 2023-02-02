/**
 * @param {number[]} nums
 * @return {number}
 */
//时间复杂度为 O（N3）
//  var lengthOfLIS = function(nums) {
//     let LFIarr = []
//     LFIarr[0]= nums[0]
//     for (let i = 1; i < nums.length; i++) {
//       if(LFIarr[LFIarr.length -1] < nums[i] ){
//         LFIarr[LFIarr.length] = nums[i]
//       }else{
//         let j = sortTwo(nums[i],LFIarr) 
//         LFIarr[j] = nums[i]
//       }
//     }
//   return LFIarr.length 
//   }
//   function sortTwo(x,LFIarr) {
//     let l = 0
//     let r = LFIarr.length -1
//     while(l < r){
//       let mid = Math.floor(l + (r - l)/2)
//       if(LFIarr[mid] > x){
//         r = mid 
//       }else{
//         l = mid +1
//       }
//     }
//     return l
//     }

//二分查找 时间复杂度O（logn）
var lengthOfLIS = function (nums) {
    let n = nums.length
    let arr = []
    arr[0] = nums[0]
    for (let i = 1; i < n; i++) {
        if (nums[i] > arr[arr.length - 1]) {
            arr.push(nums[i])
        } else {
            let l = 0
            let r = arr.length
            while(l < r ){
                let mid = Math.floor(l + (r - l) / 2)
                if (nums[i] > arr[mid]) {
                    l = mid + 1
                } else {
                    r = mid
                }
            }
            arr[l]  = nums[i]
        }
      
    }
    return arr.length
}
lengthOfLIS([10,9,2,5,3,7,101,18])


// var lengthOfLIS = function (nums) {
//     let n = nums.length;
//     if (n <= 1) {
//         return n;
//     }
//     let tail = [nums[0]];//存放最长上升子序列数组
//     for (let i = 0; i < n; i++) {
//         if (nums[i] > tail[tail.length - 1]) {//当nums中的元素比tail中的最后一个大时 可以放心push进tail
//             tail.push(nums[i]);
//         } else {//否则进行二分查找
//             let left = 0;
//             let right = tail.length - 1;
//             while (left < right) {
//                 let mid = (left + right) >> 1;
//                 if (tail[mid] < nums[i]) {
//                     left = mid + 1;
//                 } else {
//                     right = mid;
//                 }
//             }
//             tail[left] = nums[i];//将nums[i]放置到合适的位置，此时前面的元素都比nums[i]小
//         }
//     }
//     return tail.length;
// };
