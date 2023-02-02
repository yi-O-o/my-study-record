/**
 * @param {number} n
 * @return {number[]}
 */
let arr = new Array(5);

var dicesProbability = function (n) {
  let dp = new Array(n + 1).fill([]).map(() => new Array( 6* n + 1).fill(0));
  //初始化
  for (let i = 1; i <= 6; i++) {
    dp[1][i] = 1 / 6;
  }
  //开始背包
  for (let i = 2; i <= n; i++) {
    //骰子个数
    for (let j = i; j <= i * 6; j++) {
      //总合数（n个骰子出现的所有情况）
      for (let k = 1; k <= 6; k++) {
        //当前的骰子的点数
        //&& j + k <= i * 6
        if (j - k >= i - 1) {
          //j-k表示的上一层的点数总和和这一层相减会不会比最小的值还小，
          dp[i][j] += dp[i - 1][j - k] / 6;
        } else {
          break;
        }
      }
    }
  }
  console.log(dp)
  let res = []
  for(let i = 0 ;i <= 5*n;i++){
    res[i] = dp[n][n+i]
  }
  return res
};
console.log(dicesProbability(2))
