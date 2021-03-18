function gameGuessNumber(n){
    let count = 1;
    while(n != 1)
    {
        n = Math.floor(n/2);
        count++;
    }
    return count;
}
 