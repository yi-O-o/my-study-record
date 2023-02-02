/**
 * 用了递归
 * 递归的时间复杂度 T(N) = a * T(b/N) + O(N^d)
 * log(b^a) 比较d 大于O(N^d) 小于 O(log(b^a)) 等于 O（N^d * logN）
 */
let arr = [1,54,3242,5,23,4]
process(arr,0,arr.length-1)
console.log(arr);
function process(arr,left,right) {
    if(left >= right){
        return
    }
    let mid = left + Math.floor((right-left)/2)
    process(arr,left,mid)
    process(arr,mid+1,right)
    merge(arr,left,right,mid)
  }
  function merge(arr,left,right,mid) {
    let help = []
    let i = 0
    //初始指针
    let p1 = left
    let p2 = mid + 1
    while(p1 <= mid && p2 <= right){
        help[i++] = arr[p1] < arr[p2] ? arr[p1++] :arr[p2++]
    }
    while(p1<= mid){
        help[i++] = arr[p1++]
    }
    while(p2<= right){
        help[i++] = arr[p2++]
    }
    for(let j = 0;j< help.length;j++){
        arr[j+left] = help[j]
    }
    }