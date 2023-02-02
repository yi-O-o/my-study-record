let arr = [1, 5, 7, 4, 2, 7, 9, 48, 4, 8, 5]
for (let i = 1; i < arr.length; i++) {
    for (let j = i - 1; j >= 0 && arr[j] > arr[j+1]; j--) {
        [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
    }
    
}
console.log(arr);