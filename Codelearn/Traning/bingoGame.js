function bingoGame(a, b){
    let map = [];
    for(let i = 0; i < 5; i++)
    {
        map.push(Array(5).fill(false));
    }
    for(let i = 0; i < b.length; i++)
    {
        let index = findIndex(a, b[i]);
        map[index[0]][index[1]] = true;
        if(i >= 14)
        {
            if(checkMap(map)) return b[i];
        }
    }

}

function findIndex(a, el)
{
    for(let i = 0; i < 5; i++)
    {
        for(let j = 0; j < 5; j++)
        {
            if(a[i][j] === el) return [i,j];
        }
    }
}

function checkMap(map)
{
    let count = 0;
    count += map.filter(row => {
        return row.every(el => el === true);
    }).length;

    if(count == 0) return false;
    count = 0;

    for(let i = 0; i < 5; i++)
    {
        let check = true;
        for(let j = 0; j < 5; j++)
        {
            if(!map[j][i])
            {
                check = false;
                break;
            }            
        }
        if(check) {
            count++;
        }
    }

    if(count == 0) return false;
    count = 0;

    if(map[0][0] && map[1][1] && map[2][2] && map[3][3] && map[4][4]) return true;
    if(map[0][4] && map[1][3] && map[2][2] && map[3][1] && map[4][0]) return true;
    return false;
}
