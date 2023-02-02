let arr = [23, 543, 1, 324, 43, 65]
heapSort(arr)
console.log(arr);
function heapSort(arr) {
    if (arr.length < 2 || arr === null) return
    //变成大根对
    for (let i = 0; i < arr.length; i++) {
        bigHeap(arr, i)
    }
    let len = arr.length;
    len--
    [arr[len], arr[0]] = [arr[0], arr[len]]
    while (len > 0) {
        keepHeap(arr, 0, len)
        len--
        [arr[len], arr[0]] = [arr[0], arr[len]]
    }
}
function bigHeap(arr, index) {
    while (arr[index] > arr[Math.floor((index - 1) / 2)]) {
        [arr[index], arr[Math.floor((index - 1) / 2)]] = [arr[Math.floor((index - 1) / 2)], arr[index]]
        index = Math.floor((index - 1) / 2)
    }
}
function keepHeap(arr, index, len) {
    let left = index * 2 + 1
    while (left < len) {
        let maxIndex = left + 1 < len && arr[left] < arr[left + 1] ? left + 1 : left
        maxIndex = arr[index] > arr[maxIndex] ? index : maxIndex
        if (index === maxIndex) {
            break
        } else {
            [arr[index], arr[maxIndex]] = [arr[maxIndex], arr[index]]
            index = maxIndex
            left = index * 2 + 1
        }
    } 
}