function squareNumber(n){
    if(n == 0) return 1;
    let map = [];
    for(let k = 1; k <= Math.floor(Math.sqrt(n)); k++)
    {
        if(n % k == 0)
        {
            let cal = n/k;
            if(Number.isInteger(Math.sqrt(cal))) return k;
            if(Number.isInteger(Math.sqrt(k))) map.push(n/k);
        }
    }
    return Math.min(...map);
}
 