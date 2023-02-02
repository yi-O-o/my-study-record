function querySort(arr, left, right) {
    if (left >= right) {
        return
    }
    let mid = left + Math.floor(Math.random() * (right - left + 1));
    [arr[mid], arr[right]] = [arr[right], arr[mid]]
    let resultArr = mergin(arr, left, right)
    querySort(arr, left, resultArr[0])
    querySort(arr, resultArr[1], right)
    return arr
}
function mergin(arr, left, right) {
    let leftIndex = left - 1
    let rightIndex = right
    while (left < rightIndex) {
        if (arr[left] < arr[right]) {
            leftIndex++
            [arr[left], arr[leftIndex]] = [arr[leftIndex], arr[left]]
            left++
        } else if (arr[left] > arr[right]) {
            rightIndex--
            [arr[left], arr[rightIndex]] = [arr[rightIndex], arr[left]]
        } else {
            left++
        }
    }
    [arr[rightIndex], arr[right]] = [arr[right], arr[rightIndex]]
    return [leftIndex, rightIndex + 1]
}
let arr = [1, 3, 5, 3, 45, 34, 3]
console.log(querySort(arr, 0, arr.length - 1))