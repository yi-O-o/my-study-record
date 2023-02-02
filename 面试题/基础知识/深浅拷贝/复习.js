// let obj = {
//     name: "jinyicai",
//     age: 18,
// }

// function cloneDeep(obj) {
//     let arr = Array.isArray(obj) ? [] : {}
//     for (let key in obj) {
//         if (typeof obj[key] === 'object') {
//             arr[key] = cloneDeep(obj[key])
//         } else {
//             arr[key] = obj[key]
//         }
//     }
//     return arr
// }

// let old = { a: 23, b: 'asd', c: { we: 32 } }
// let b = old
// console.log(old === b);
// let a = cloneDeep(old)
// console.log(a);
// console.log(a === old);

let arr = 
console.log({}.__proto__ === Function.prototype);