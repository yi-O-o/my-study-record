let arr = [0,1]
function handle2(arr) {
    let pro = {x:0,y:0}
    let maxSum = -Infinity
    let pre = 0 //前一个坐标
    let las = 0 //前面的坐标
    let sum = 1
    let isZenly = false
    while(arr.length > las){
        let cur = arr[las]
        if(cur === 0){
            isZenly = true
            las++
            pre = las
            sum = 1
        }else{
            sum *= cur
            if(sum > maxSum){
                maxSum = sum
                if(isZenly){
                    pro.x = pre
                    isZenly = false
                }
                pro.y = las
            }
                las++
        }
    }
    return pro
  }
 console.log( handle2(arr));