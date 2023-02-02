function longestSubStr(s) {
    let res =0
    for(let left = 0;left < s.length;left++){
        let str =''+s[left]
        for(let right = 1;right < s.length;right++){
            if(str.includes(s[right])){
                res = Math.max(res,str.length)
                break
            }else{
                str += s[right]
            }
        }
    }
    return res
  }

  console.log(longestSubStr('1234532113'));


