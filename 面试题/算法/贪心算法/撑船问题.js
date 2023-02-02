/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
 var numRescueBoats = function(people, limit) {

};

let people = [44,10,29,12,49,41,23,5,17,26]
let limit = 50
let sortPeople = people.sort(function (a,b) {return a-b})
console.log(sortPeople);
let len = people.length
let left = 0
let right = len - 1
let res = 0
while(left < right){
    if(sortPeople[left] + sortPeople[right] <= limit){
        right--
        left++
        res++
    }else{
        right--
        res++
    }
}
if(left == right){
    res++
}
console.log(res);
