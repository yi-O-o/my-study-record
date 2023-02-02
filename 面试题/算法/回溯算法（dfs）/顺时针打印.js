/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    let n = matrix.length
    let m = matrix[0].length
    let stepX = [1, 0, -1, 0]
    let stepY = [0, 1, 0, -1]
    let result = []
    result.push(matrix[0][0])
    matrix[0][0] = 'x'
    let index = 0
    dfs(0, 0)
    function dfs(y, x) {
        if(result.length == n * m){
            return 
        }
        if (index > 3) {
            index = 0
        }
        let nextY = y + stepY[index]
        let nextX = x + stepX[index]
        if (nextX < m && nextX >= 0 && nextY < n && nextY >= 0 && matrix[nextY][nextX] != 'x') {
            result.push(matrix[nextY][nextX])
            matrix[nextY][nextX] = 'x'
        } else {
            nextY = y
            nextX = x
            index++

        }
        dfs(nextY, nextX)
     
    }
    return result
};
let matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
console.log(spiralOrder(matrix))