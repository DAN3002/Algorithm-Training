function ticTacToe(select){
    let broad = [];
    for(let i = 0; i < 3; i++) broad.push(Array(3).fill(0));

    let player = 1;
    for(let i of select)
    {
        // i -= 1;
        let row =  i % 3 == 0 ? i/3 - 1 : Math.floor(i/3);
        let column = i % 3 == 0 ? 2 : i % 3 -1;
        broad[row][column] = player;
        let check = checkBroad(broad);

        if(check == 1 || check == 2) return check;
        player = player == 1 ? 2 : 1;
    }

    if(broad.some(b => b.some(el => el == 0))) return -1;

    return 0;
}

function checkBroad(broad)
{
    const a = broad.find(el => el.every(i => i == el[0] && el[0] != 0));
    if(a) return a[0];

    for(let i = 0; i < 3; i++)
    {
        let check = true;
        for(let j = 0; j < 3; j++)
        {            
            if(broad[j][i] == 0|| broad[j][i] != broad[0][i])
            {
                check = false;
                break;
            }            
        }
        if(check) return broad[0][i];
    }

    if(broad[0][0] == broad[1][1] && broad[1][1] == broad[2][2] && broad[1][1] != 0) return broad[1][1];
    if(broad[0][2] == broad[1][1] && broad[1][1] == broad[2][0] && broad[1][1] != 0) return broad[1][1];

    return -1;
}
