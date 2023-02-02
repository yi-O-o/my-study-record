/**
 * 横向
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
    let prefix = strs[0]
      getLongStr = (str1, str2) => {
          let num = 0
          let minLong = Math.min(str1.length, str2.length)
          for (let i = 0; i < minLong; i++) {
              if (str1[i] == str2[i])
                  num++
              else
                  break
          }
          return str1.substr(0, num)
      }
      for (let i = 1; i < strs.length; i++)
      {
          prefix = getLongStr(prefix, strs[i])
          if(prefix === '')
          return ''
      }
  
      return prefix
  };