let arr = [
    [0, 0, -1, 0],
    [0, 0, 0, 0],
    [0, 0, -1, 0],
    [0, -1, 0, 0],
    [0, 0, 0, -1],
]
console.log(main(arr, 0, 0, 3, 2));
function main(arr, startX, startY, endX, endY) {
    let isIN = []
    for (let i = 0; i < 5; i++) {
        isIN[i] = []
        for (let j = 0; j < 4; j++) {
            isIN[i][j] = 0
        }
    }
    let min = Infinity
    isIN[startX][startY] = 1
    dfs(startX, startY, 0)
    return min
    function dfs(x, y, step) {
        //右下左上
        let arrX = [0, 1, 0, -1]
        let arrY = [1, 0, -1, 0]
        if (x === endX && y == endY) {
            if (min > step) {
                min = step
            }
            return
        }
        for (let i = 0; i < 4; i++) {
            let tx = x + arrX[i]
            let ty = y + arrY[i]
            if (tx >= 0 && ty >= 0 && tx <= 4 && ty <= 3 && arr[tx][ty] === 0 && isIN[tx][ty] === 0) {
                isIN[tx][ty] = 1
                dfs(tx, ty, step + 1)
                isIN[tx][ty] = 0
            }
        }
    }
}
