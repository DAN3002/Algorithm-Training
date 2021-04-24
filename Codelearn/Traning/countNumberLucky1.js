function countNumberLucky1(n){
    let count = 0;
    for(let i = 0; i <= Math.floor(n / 7); i++)
    {
        if((n - i*7) % 4 == 0) count++;
    }
    return count;
}
 