function pillShelf(n){
    let map = [];
    for(let i = 0; i < n; i++) map.push(Array(n).fill(0));

    let x = 0; y = n - 1;
    check = true;
    for(let i = 1; i <= Math.pow(n, 2); i++){
        map[x][y] = i;
        if(x == n -1 && y == n - 1) check = false;

        if(map[x+1] && map[x+1][y+1] == 0){
            x++;
            y++;
        } else {
            if(check){
                y = n - x - 2;
                x = 0;
            } else {
                x = n - y;
                y = 0;
            }


        }
    }

    return map;
}
