/**
 * 快速排序
 * 时间平均复杂度O(nlog2n)
 * 时间复杂度最差0（n**2）
 * 空间复杂度O(nlog2n)
 * 稳定的
 */
let arr = [1, 5, 7, 4, 2, 7, 9, 48, 4, 8, 5];
quickSort(arr, 0, arr.length - 1);
console.log(arr);
function quickSort(arr, left, right) {
  if (left < right) {
    //随机找一个数 这样时间复杂度才为O（N * logN）
    let sawpNum = left + Math.floor(Math.random() * (right - left + 1));
    //然后和最左边的交换
    [arr[sawpNum], arr[right]] = [arr[right], arr[sawpNum]];
    //这是等于随机的那一个数的数组
    let equalArr = partition(arr, left, right);
    quickSort(arr, left, equalArr[0] - 1);
    quickSort(arr, equalArr[1] + 1, right);
  }
}
function partition(arr, left, right) {
  let less = left - 1; //< 的边界
  let more = right; //> 的边界
  while (left < more) {
    if (arr[left] < arr[right]) {
      less++
      [arr[less], arr[left]] = [arr[left], arr[less]];
      left++
    } else if (arr[left] > arr[right]) {
      more--
      [arr[more], arr[left]] = [arr[left], arr[more]];
    } else {
      left++;
    }
  }
  [arr[more], arr[right]] = [arr[right], arr[more]];
  return [less + 1, more];
}
