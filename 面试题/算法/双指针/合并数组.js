function mergeArray(nums1, nums2) {
    let right = 0
    let left = 0
    let res = []
    while (left < nums1.length || right < nums2.length) {
        if (left < nums1.length && right < nums2.length) {
            if (nums1[left] < nums2[right]) {
                res.push(nums1[left])
                left++
            } else {
                res.push(nums2[right])
                right++
            }
        }else if(left < nums1.length){
            res.push(nums1[left])
            left++
        }else{
            res.push(nums2[right])
            right++
        }
    }
    return res
}
console.log(mergeArray([1,2,3,5,6,9],[2,2,4,6,8,10,56]));