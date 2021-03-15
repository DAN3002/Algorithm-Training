function levelUp(n, d, a, b){
    let count = 0;
    for(let i = a; i < b; i++)
    {
        count += d[i-1];
    }
    return count;
}
 