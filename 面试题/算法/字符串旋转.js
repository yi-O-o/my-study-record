/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function (s, goal) {

};

let s = 'abcde'
let goal = 'cdeab'
let arr = s.split('')
for (let i = 0; i < goal.length; i++) {
    let j = 0
    let result = arr.every(item => {
       return item == goal[j++]
    })
    if (result) {
        console.log(true);
    } else {
        arr.push(arr.shift())
        console.log(arr);
    }
}