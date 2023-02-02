let iterator = {
    arr:['name','age','sex'],
    [Symbol.iterator]:function () {  
       let index = 0
       return{
        next:() => {
            if(index < this.arr.length){
                return {done:false,value:this.arr[index++]}
            }else{
                return {done:true,value:undefined}
            }
        }
       }
    }
}
let it = iterator[Symbol.iterator]()
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());