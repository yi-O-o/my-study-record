/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxValue = function (grid) {
    let n = grid.length
    let m = grid[n - 1].length
    let dp = new Array(n).fill([]).map(() => new Array(m).fill(0))
    dp[0][0] = grid[0][0]
    for (let j = 1; j < m; j++) {
        dp[0][j] = dp[0][j - 1] + grid[0][j]
    }
    console.log(dp)
    for (let i = 1; i < n; i++)
        dp[i][0] = dp[i - 1][0] + grid[i][0];
        console.log(dp)
    for (let i = 1; i < n; i++) {
        for (let j = 1; j < m; j++) {
            dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]) + grid[i][j]
        }
    }
    console.log(dp)
    return dp[n - 1][m - 1]
};
console.log(maxValue([[1, 2, 5], [3, 2, 1]]));