/**
 * @param {number} n
 * @return {number[]}
 */
var dicesProbability = function (n) {
  let map = new Map();
  let result = [];
  let linshi = [];
  dfs();
  function dfs() {
    if (linshi.length === n) {
      let sum = linshi.reduce((perv, item) => {
        return perv + item;
      }, 0);
      if (map.has(sum)) {
        map.set(sum, map.get(sum) + 1);
      } else {
        map.set(sum, 1);
      }
      return;
    }
    for (let i = 1; i <= 6; i++) {
      linshi.push(i);
      dfs();
      linshi.pop();
    }
  }
  let zoNum = 0
  for (let [key,val] of map) {
    zoNum += val
  }
  for (let [key,val] of map) {
    result.push(val / zoNum)
  }
  return result;
};
console.log(dicesProbability(2))