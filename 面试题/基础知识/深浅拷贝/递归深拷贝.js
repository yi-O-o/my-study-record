function cloneDeep(obj){
  let newObj = Array.isArray(obj)?[]:{}
  if(typeof obj === 'object'){
    for(let key in obj){
      if( typeof obj[key] === 'object'){
        newObj[key] = cloneDeep(obj[key])
      }else{
      newObj[key] = obj[key]
      }
    }
  }
  return newObj
}

let old = {a:23,b:'asd',c:{we:32}}
let b = old
console.log(old === b);
let a = cloneDeep(old)
console.log(a);
console.log(a === old);
