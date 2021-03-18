function minimumSquares(n,m){
    if(n == 0 || m == 0) return 0;
 
    const min = Math.min(n, m);
    const max = Math.max(n,m);
 
    if(min === 1) return max;
 
    const time = Math.floor(max / min);
    return time + minimumSquares(max - min*time, min);
}