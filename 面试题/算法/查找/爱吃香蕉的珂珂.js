/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 * 思路：
 * 1.每一个小时吃k个，k从1开始，如果超时则加1，如果没有超时则是结果
 * 2.k的最小是1最大时piles中最大的一个数，所以可以使用二分法
 */
//版本1
 var minEatingSpeed = function(piles, h) {
   let left = 1
   let right = Math.max(...piles)
   //假设每一个小时吃mid个
   let mid 
  while(left < right){
    mid = Math.floor((left+right) / 2)
   //吃完了
   if(checkK(mid,h,piles)) {
     right = mid
   }
   //没有吃完
   else {
      left = mid + 1
   }
  }
  return left
};

function checkK(k,h,piles){
  let resultTime = 0
  for(let i = 0;i < piles.length ; i++){
    if(k >= piles[i]){
      resultTime++
    }else if (k < piles[i]){
      resultTime += Math.ceil(piles[i] / k)
    }
    if(resultTime > h) return false
  }
  return true
}
console.log(minEatingSpeed([30,11,23,4,20], 6));