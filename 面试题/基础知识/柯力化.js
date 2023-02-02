/**
 * 
 * 柯力化的思想：把看看参数够不够 够的话
 */
//参数长度固定
function sum(a, b, c, d) {
  return a + b + c + d
}
function curry(fn,...args1) {
  args1 = args1 || []
  let fnLen = fn.length
  return (...args2) => {
    let allArgs = args1
    allArgs.push(...args2)
    if(allArgs.length < fnLen){
      return curry.call(this,fn,...allArgs)
    }else{
      return fn.apply(this,allArgs)
    }
  }
}
let cur = curry(sum)
console.log(cur(1,2,3,1));
