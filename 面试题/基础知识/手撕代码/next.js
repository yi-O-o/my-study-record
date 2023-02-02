function  createIterator(arr) { 
    let index = 0
    return {
        next(){
            if(index < arr.length){
                return {done:false,value:arr[index++]}
            }else{
                return {done:true,value:undefined}
            }
        }
    }
 }
 let arr = ['name','age','sex']
 let arrIterator = createIterator(arr)
 console.log(arrIterator.next());
 console.log(arrIterator.next());
 console.log(arrIterator.next());
 console.log(arrIterator.next());