function querySort(arr, left, right) {
    if (left < right) {
        let mid = left + Math.floor(Math.random() * (right - left + 1));
        [arr[mid], arr[right]] = [arr[right], arr[mid]]
        let res = partition(arr, left, right)
        querySort(arr,left,res[0] -1)
        querySort(arr, res[1] + 1, right)
    }
}
function partition(arr, left, right) {
    let less = left - 1
    let more = right
    while (left < more) {
        if (arr[left] < arr[right]) {
            less++
            [arr[left], arr[less]] = [arr[less], arr[left]]
            left++
        } else if (arr[left] == arr[right]) {
            left++
        } else {
            more--
            [arr[left], arr[more]] = [arr[more], arr[left]]
        }
    }
    [arr[right], arr[more]] = [arr[more], arr[right]]
    return [less + 1, more]
}


let arr = [1, 4, 265, 2, 56]
querySort(arr, 0, arr.length - 1)
console.log(arr);