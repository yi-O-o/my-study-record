/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  const map = nums1.reduce((prev,cur) => {
    prev.set(cur,((prev.get(cur) || 0) + 1))
    return prev
  },new Map())

  const result = nums2.reduce((prev,cur) => {
      if(map.has(cur) && map.get(cur) > 0){
        prev.push(cur)
        map.set(cur,map.get(cur) - 1)
      }
      return prev
  },[])
  return result
};


// var intersect = function(nums1, nums2) {
//     const map = nums1.reduce((acc, cur) => {
//       acc.set(cur, (acc.get(cur) || 0) + 1);
//       return acc;
//     }, new Map());
  
//     const result = nums2.reduce((acc, cur) => {
//       if (map.has(cur) && map.get(cur) > 0) {
//         acc.push(cur);
//         map.set(cur, map.get(cur) - 1);
//       }
//       return acc;
//     }, []);
  
//     return result;
//   };
  
console.log(intersect([4,9,5],[9,4,9,8,4]));