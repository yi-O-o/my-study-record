/**
 * @param {number} k
 * @return {number}
 */
 var findMinFibonacciNumbers = function(k) {
  if(k == 1){
    return 1
  }
  let num = 0
  while(k != 0){
    let fibonacciArr = fibonacci(k)
    k = k - fibonacciArr[fibonacciArr.length - 1]
    num++
  }
  return num

};
function fibonacci (val){
  let arr = [1,1]
  while(arr[arr.length -1 ] < val){
    arr.push(arr[arr.length -1 ] +arr[arr.length -2 ])
  }
  if(arr[arr.length -1] > val){
    arr.pop()
    return arr
  }
  if(arr[arr.length -1] == val){
    return arr
  }
}
console.log(findMinFibonacciNumbers(19));