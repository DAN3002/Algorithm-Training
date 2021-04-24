function love3(n){
    for(let a = 1; a < n; a++)
    {
        if(a % 3 == 0) continue;
        for(let b = a; b < n; b++)
        {
            if(b % 3 == 0) continue;
            let c = n - a - b;
            if(c >= b && c % 3 != 0) return [a,b,c];
        }
    }
}
 