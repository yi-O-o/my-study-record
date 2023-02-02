/**
 * @param {string} s
 * @return {string}
 */

 var longestPalindrome = function(s) {
    let res = ""
if (s.length<2){
    return s
}
for(let i = 0; i<s.length; i++){
    //奇数
  getChileStr(i,i); 
    //偶数
   getChileStr(i,i+1);
}

function getChileStr(m,n){
    while(m >= 0 && n<s.length && s[m] == s[n]){
        m--
        n++
    }
    // 这里是比较子回文的长度 n到m的距离是 n-m+1 但是不能算n，m要算n+1 和m-1 这里就少了2个 所以 -2 n-m+1-2=n-m-1
    if(n-m-1 > res.length){
        res=s.slice(m+1,n)
    }
}
return res
};

let s = "123211112"
console.log( longestPalindrome(s));