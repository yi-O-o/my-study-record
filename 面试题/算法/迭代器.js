// function counter(arr) { 
//     //迭代的次数 从0开始
//     let current = 0
//     let next = function () { 
//         console.log(this.current);
//         if(current < arr.length){
//             return {done:false,value:arr[current++]}
//         }else{
//             return {done:true,value:undefined}
//         }
//      }
//      let srtCurrent = function () {
//        current = 4
//        }
//      return {next,srtCurrent,current
//     }
//  }

//  let c1 =  counter([1,2,3,4,5])

//  let c2 =  counter([1,2,3,4,5])
// console.log(c1.current);
// console.log(c2.srtCurrent());
// console.log(c1.current);
// console.log(c2.current);
// console.log(c2.next());
// console.log(c1.next());

let arr = [1,2,3]
class Counter {
    constructor(arr) {
        this.arr = arr
    }
    [Symbol.iterator]() {
        let current = 0
        // console.log(this);
        // let arr = this.arr
        return {
            next() {
                console.log(this.arr);
                if (current < arr.length) {
                    return { done: false, value: arr[current++] }
                } else {
                    return { done: true, value: undefined }
                }
            }
        }
    }

}

let c1  = new Counter([1,2,3,4])

for(let i of c1){
    console.log(i);
}
// for(let i of c1){
//     console.log(i);
// }