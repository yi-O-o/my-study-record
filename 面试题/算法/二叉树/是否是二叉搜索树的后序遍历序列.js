/**
 * @param {number[]} postorder
 * @return {boolean}
 */
var verifyPostorder = function (postorder) {
    return isHouTree(postorder)
};
function isHouTree(arr) {
    if (arr.length == 0 || arr.length == 1) {
        return true
    }
    let rootIndex = arr.length - 1
    let mid = 0
    //找到第一个比root大的数 =》这样就可以分辨出 左子树 和右子树 左边的是左子树
    while (arr[mid] < arr[rootIndex]) {
        mid++
    }

    //因为上面已经判断了是不是左子树的 因为左子树可以变成右子树来判断 
    //比如 [4, 8, 6, 12, 16, 14, 10] 这个 第一个比10大的是 12 [4,8,6]是左子树然后也可以用过下面的循环来拍断
    for (let i = mid + 1; i < rootIndex; i++) {
        if (arr[i] < arr[rootIndex]) {
            return false
        }
    }

    return isHouTree(arr.slice(0, mid)) && isHouTree(arr.slice(mid, rootIndex))
}
console.log(verifyPostorder([5, 4, 3, 2, 1]))