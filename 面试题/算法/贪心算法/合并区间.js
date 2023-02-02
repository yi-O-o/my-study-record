/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
 var merge = function(intervals) {
   fastSort(intervals,0,intervals.length -1)
   let resultArr = []
   resultArr.push(intervals[0])
  // intervals.forEach(item => {
  //   item.forEach(itmeData => {
  //     arr.push(itmeData)
  //   })
  // });
  // for(let i = 0 ;i<arr.length - 1; i++){
  //   if(arr[i] >= arr[i+1]){
  //     arr.splice(i,2)
  //   }
  // }
  for(let i = 1;i<intervals.length; i++){
    if(intervals[i][0] > resultArr[resultArr.length -1][1] ){
      resultArr.push(intervals[i])
    }
    else{
      resultArr[resultArr.length -1 ][1] = Math.max(resultArr[resultArr.length -1 ][1],intervals[i][1])
    }
  }
  return resultArr
};
function fastSort (arr,low,higt){
  if(low > higt){
    return 
  }
  let left = low
  let right = higt
  let perv = arr[left]
  while(left < right){
    while(left < right  && arr[right][0] >= perv[0]){
      right--
    }
    if(left < right) arr[left++] = arr[right]
    while(left < right  && arr[left][0] < perv[0]){
      left++
    }
    if(left < right) arr[right--] = arr[left]
  }
  arr[left] = perv
  fastSort(arr,low,left - 1)
  fastSort(arr,left + 1,higt)
}
// let arr = [[1,3],[0,6],[8,10],[15,18]]
// fastSort(arr,0,arr.length -1)
// console.log(arr);
// console.log(merge([[1,3],[2,6],[8,10],[15,18]]));