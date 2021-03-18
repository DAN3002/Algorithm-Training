function ropeCut(m){
    let current = 1;
    let count = 0;
    while(current < m)
    {
        count++;
        current *= 2;
    }
    return count;
}