/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
    const n = board.length
    const m = board[0].length
    const stepX = [0, 1, 0, -1]
    const stepY = [1, 0, -1, 0]
    /**
     * 这里为什么要遍历，迷宫为什么不用
     * 1.迷宫是开头第一个一定可以走到尾都是有路的，没有路就直接返回false
     * 2。这个是第一个不一定是答案，所以要遍历每一个元素，去查看每一个元素当成头开始走 看看可不可以走到尾
     */
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (dfs(board, word, i, j, 0)) return true
        }
    }
    function dfs(b, w, x, y, k) {
        if ( x < 0 || x >= n || y < 0 || y >= m ||b[x][y] !== w[k]) {
            return false
        }
        if (k == w.length - 1) {
            return true
        }
        const temp = b[x][y] 
        b[x][y] = 1
        for (let i = 0; i < 4; i++) {
            let tx = stepX[i] + x
            let ty = stepY[i] + y
            if(dfs(b,w,tx, ty,k+1)) return true
        }
        b[x][y] = temp
        return false
    }
}

let arr = [["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]]
let word = "SEE"
console.log(exist(arr, word))