let WIDTH, HEIGHT, out;
let dp;

let MOVE = [
    [0,1],
    [1,0],
    [-1, 0],
    [0, -1]
]

function collectionsLetter(map){
    if(map[0][0] == 0) return false;

    WIDTH = map.length;
    HEIGHT = map[0].length;

    out = false;

    dp = [];

    for(let i = 0; i < HEIGHT; i++){
        dp.push(Array(WIDTH).fill(false));
    }

    dfs(map, 0, 0);

    return out;
}

function dfs(map, x, y){
    // console.log(x, y);
    if(dp[x][y]) return ;
    dp[x][y] = true;

    if(x == WIDTH - 1 && y == HEIGHT - 1) {
        out = true;
        return ;
    }


    for(let vec of MOVE){
        if(out) break;

        let newX = x + vec[0];
        let newY = y + vec[1];

        if(newX < 0 || newY < 0 || newX >= WIDTH || newY >= HEIGHT) continue;

        if(map[newX][newY] == 1) dfs(map, newX, newY);
    }
}
