function rotAllApple(n,m,positions){
    const MOVE = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1],
    ];

    let size = n*m - positions.length;
    let day = 0;
    let map = new Map();

    for (const position of positions) {
        map.set(position[0] + "_" + position[1], true);
    }

    while(size > 0) {
        day++;
        const newPoistions = [];
        for (const position of positions) {
            const [x,y] = position;
            for(const move of MOVE) {
                const newX = x + move[0];
                const newY = y + move[1];

                if(!map.get(newX + "_" + newY) && valid(newX, newY, n, m))
                {
                    size--;
                    newPoistions.push([newX, newY]);
                    map.set(newX + "_" + newY, true);
                    // console.log(newX + "_" + newY);
                }
            }
        }
        // console.log(newPoistions);
        // console.log(size);
        positions = newPoistions;
    }

    return day;

    
}

function valid(x, y, n, m) {
    return x > 0 && y > 0 && x <= n && y <= m;
}
