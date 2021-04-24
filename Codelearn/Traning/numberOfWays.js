function numberOfWays(n, a, b, c){
    a = Math.floor(a/2);
    let count = 0;
    for(let i = 0; i <= a; i++)
    {
        for(let j = 0; j <= c; j++)
        {
            let cal = n - i - 2*j;
            if(cal >= 0 && cal <= b) count++;
        }
    }
 
    return count;
}
 