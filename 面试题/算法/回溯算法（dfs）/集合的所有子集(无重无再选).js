var subsets = function(nums) {
  let res =[],arr = []
  const find = function(begin){
      res.push([...arr])
      for(let i=begin;i<nums.length;i++){
          arr.push(nums[i])
          find(i+1)
          arr.pop()
      }
  }
  find(0)
  return res
};

let nums= [1,2,3]
subsets(nums)