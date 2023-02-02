//封装小根堆
let arr = [23,4,1,23,132]
console.log(heapSort(arr,3));
function heapSort(arr,k) {
    let length = arr.length
    let resultArr = []
    let index = 0
    for( ; index < Math.min(k,length);index++){
        heapInsert(arr,index)
    }
    let i = 0
    for(;index < length;i++,index++){
        resultArr[i] = arr[0]
        arr.splice(0,1)
        heapity(arr,0,arr.length)
    }
    while(arr[0] != undefined ){
        resultArr[i++] = arr[0]
        arr.splice(0,1)
        heapity(arr,0,arr.length)
    }
    return resultArr
 }
function heapInsert(arr,index) { 
    while(arr[index] < arr[Math.floor( (index - 1) / 2)]){
        [arr[index],arr[Math.floor((index - 1) / 2)]] = [arr[Math.floor((index - 1) / 2)],arr[index]]
        index = Math.floor((index - 1) / 2)
    }
 }
 function heapity(arr,index,heapSize) { 
    let left =  index * 2 + 1
    while(left < heapSize){
        let minIndex = left + 1 < heapSize && arr[left] > arr[left + 1]? left + 1 : left
        minIndex = arr[index] < arr[minIndex] ? index : minIndex
        if(minIndex === index){
            break
        }
        [arr[minIndex],arr[index]] = [arr[index],arr[minIndex]]
        index = minIndex
        left =  index * 2 + 1
    }
  }