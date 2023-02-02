/**
 * @param {number[][]} grid
 * @return {number}
 */
 var minPathSum = function(grid) {
    //横
    let col = grid[0].length
    //列
    let row = grid.length
    //横向
    let sum = 0
    for(let i = 0; i < col ;i++){
        grid[0][i] = sum + grid[0][i] 
        sum += grid[0][i]
    }
    //列
    sum = 0
    for(let j = 0 ;j<row ;j++ ){
        grid[j][0] = sum + grid[j][0]
        sum += grid[j][0]
    }

    for(let j = 1 ; j< row ;j++){
        for(let i = 1; i<col ;i++){
            grid[j][i] += Math.min(grid[j-1][i],grid[j][i-1])
        }
    }
    return grid[row -1][col -1]
};
