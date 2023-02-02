/**
 * @param {string} s
 * @return {number}
 * 思路：只有偶数才是回文，奇数不能变成回文，在全是偶数的时候(baab) 中间还可以放一个数(bavab) 所以 result + 1
 * 如果是 一个的话 a 则result = 1
 */

let s = "aa"
// var longestPalindrome = function (s) {
//     let set = new Set()
//     let result = 0
//     for (let i = 0; i < s.length; i++) {
//         if (!set.has(s[i])){
//             set.add(s[i])
//         }else{
//             result += 2
//             set.delete(s[i])
//         }
//     }
//     return set.size == 0? result: ++result
// };

var longestPalindrome = function (s) {
    let map = new Map();
    let count = 0;
    let arrS = s.split("");
    for (let a of arrS) {
      if (map.has(a)) {
        // 有相同的字符存在，就相当于找到了可以回文的字符
        map.delete(a);
        // 结果数加2
        count += 2;
      } else {
        map.set(a);
      }
      console.log(map);
    }
    // 回文串如果是奇数的话，中心节点是单一节点，但最多只能有一个中间节点
    return count + (map.size ? 1 : 0);
  };
  

console.log(longestPalindrome(s));


