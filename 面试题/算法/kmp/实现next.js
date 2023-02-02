let haystack = 'aabaabaaf'
let needle = "aabaaf"
function strStr(haystack,needle) {  
    let next = getNext(needle)
}
function getNext(str) {
    //初始化
    let next = [0]
    let j = 0 //前缀末尾
    let i //后缀末尾
    for (i = j + 1; i < str.length; i++) {
        //前后缀不相等
        while(j > 0 && str[j] !== str[i]){
            //前一个
            j = next[j-1]
        }
        //前后缀想到
        if(str[j] === str[i]){
            j++
        }
        next[i] = j
    }
    return next
}
console.log(getNext(needle));