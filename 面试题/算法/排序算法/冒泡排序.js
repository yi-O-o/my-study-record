/**
 * 冒泡排序
 * 时间复杂度O(n**2)
 * 空间复杂度O(1)
 * 稳定
 */
let arr = [1, 5, 7, 4, 2, 7, 9, 48, 4, 8, 5]
//i = 0从第一个开始和第二个开始 ，i = 1从第二个和第三个开始
for (let i = 0; i < arr.length ; i++) {
    //相邻的两两交换
    for (let j = 0; j < arr.length - i ; j++) {
        if (arr[j] > arr[j + 1]) {
            [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
        }
    }
}
console.log(arr);