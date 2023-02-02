/**
 * 选择排序
 * 时间复杂度 O(N ** 2)
 * 空间复杂度 O（1）
 * 不稳定
 */
let arr =[1,5,7,4,2,7,9,48,4,8,5]
for(let i = 0; i<arr.length;i++){
    //最左边的数默认为最小
    let deFineMin = i
    for(let j = i + 1; j<arr.length; j++){
        //如果右边的比左边的小 则更换下标
        if(arr[deFineMin] > arr[j]){
            deFineMin = j
        }
    }
    //数组对换
    [arr[i],arr[deFineMin]] = [arr[deFineMin],arr[i]]
}
console.log(arr);