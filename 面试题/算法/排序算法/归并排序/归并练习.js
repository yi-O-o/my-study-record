function sort(arr, left, right) {
    if(left >= right){
        return
    }
    let mid = left + Math.floor((right - left) / 2)
    sort(arr, left, mid)
    sort(arr, mid + 1, right)
    merge(arr, left, right, mid)
}
function merge(arr, left, right, mid) {
    let less = left
    let more = mid + 1
    let help = []
    let index = 0
    while (less <= mid && more <= right) {
        help[index++] = arr[less] < arr[more]?  arr[less++]: arr[more++]
    }
    while (arr[less] && less <= mid) {
        help[index++] = arr[less++]
    }
    while (arr[more] && more <= right) {
        help[index++] = arr[more++]
    }
    for (let i = 0; i < help.length; i++) {
        arr[i + left] = help[i]
    }
}
let arr = [23,43,1,4,25,23]
sort(arr,0,arr.length -1)
console.log(arr);
