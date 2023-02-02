/**
 * 他的实质是完全二叉树，复合完全二叉树的所有性质
 * 父节点是 Math.floor((i-1)/2)
 * 左子节点是 2i+1 右子节点是2i+2
 * 堆排序 先变成大根堆 然后用第一个数和最后一个数交换交换 然后再调用heapity变成堆 然后再重复上面的动作
 * 时间复杂度 O(N * logN) 空间O（1）
 * 还有一种方法 用heapity变成大根堆 时间复杂度 O（N）
 */

let arr = [23, 543, 1, 324, 43, 65]
heapSort(arr)
console.log(arr);
function heapSort(arr) {
    if(arr.length < 2 || arr === null ) return
    //变成大根堆 方法一
    for(let i = 0 ; i < arr.length; i++){ //O(N)
        heapInsert(arr,i) //O(logN)
    }

    //方法二
    // for(let i = arr.length -1 ;i >= 0 ;i--){
    //     heapity(arr,i,arr.length)
    // }

    
    let heapSize = arr.length
    //交换第一个和最后一个很位置
    heapSize--
    [arr[0],arr[heapSize]] =[arr[heapSize],arr[0]]  //O（1）
    while(heapSize > 0){        //O(N)
        //变成大根堆
        heapity(arr,0,heapSize) //O(logN)
        heapSize--
        [arr[0],arr[heapSize]] =[arr[heapSize],arr[0]]
    }
  }




 //变成大根堆 1.用下标 如果比父大则换位置
 function heapInsert(arr,index) {
    //持续向上移动
    while(arr[index] > arr[Math.floor((index -1) / 2)]){
        [arr[index],arr[Math.floor((index - 1 ) / 2 ) ]] = [arr[Math.floor((index - 1 ) / 2)],arr[index]]
        index = Math.floor((index - 1) /2)
    }
   }


//从中挑选出最大的，并还保持大根堆
function heapity(arr,index,heapSize) {
    //左孩子
    let left = index * 2 +  1
    //最下面的左孩子要小于heapSize，可能右孩子 下面判断
    while(left < heapSize){
        //看孩子左边和右边哪一个大
        let maxIndex = left + 1 < heapSize &&  (arr[left] < arr[left + 1])? left + 1: left 
        //看父亲和最大的孩子比谁大
        maxIndex = arr[index] > arr[maxIndex] ? index : maxIndex 
        if(maxIndex == index){
            //父亲大 结束循环
            break
        }else{
            [arr[index],arr[maxIndex]] = [arr[maxIndex],arr[index]]
            index = maxIndex
            left = index * 2 + 1
        }
    }


  }