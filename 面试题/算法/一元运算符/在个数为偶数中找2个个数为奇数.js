/**
 * 与 & 运算 同位都是1则是1，同位都是0还是0 
 *异或 ^ 运算 同位不同则是1 ，相同则是0
 */

let arr = [2,2,2,2,3,3,3,1,4,4,4,4] 

function findNum(arr) {
    let eor = 0
    arr.forEach(item => {
        //排除个数是偶数的数,其中还有2个数 个数是奇数
        eor ^= item
    });
    console.log(eor)
    //定义另一个个数是奇数的
    let onlyOne = 0
    //因为eor = a^b 
    //有因为eor != 0
    //所以eor二进制位上有一个位一定是1
    //取最右边是1的
    let right = eor & (~eor + 1)
    arr.forEach(item => {
        if((right & item) == 0){
            onlyOne ^= item
        }
    })
    return [onlyOne,eor^onlyOne]
  }
  console.log(findNum(arr));