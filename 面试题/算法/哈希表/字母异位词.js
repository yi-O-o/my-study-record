 strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
 let map = new Map()
for(let i of strs){
    console.log(i);
    let array = Array.from(i)
    //因为数组不能比较,引用的地址不同 只能转换成字符串才能比较大小
    let key = array.sort().toString()
    let list = map.get(key)?map.get(key):new Array()
    list.push(i)
    map.set(key,list)
    console.log(map);
}
// 输出的是{ [ 'eat', 'tea', 'ate' ], [ 'tan', 'nat' ], [ 'bat' ] } 是一个迭代器函数 通过Array.from转化成Array
console.log(Array.from(map.values()));