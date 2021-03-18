function rightTurn(a){
    let x = a[1][0] - a[0][0];
    let y = a[1][1] - a[0][1];    
    let count = 0;
    for(let i = 0; i < a.length - 1; i++)
    {
        if(x == 0 && y == 1 && a[i+1][0] > a[i][0]) count++;
        else if(x == 1 && y == 0 && a[i+1][1] < a[i][1]) count++;
        else if(x == 0 && y == -1 && a[i+1][0] < a[i][0]) count++
        else if(x == -1 && y == 0 && a[i+1][1] > a[i][1]) count++;
        x = a[i+1][0] - a[i][0];
        y = a[i+1][1] - a[i][1];
    }
    return count;
}
 