function hoop(n, m, turns){
    let out = [];
    for(let i = 1; i <= m; i++)
    {
        if((i%3 == 0 || i%7 == 0))
        {
            if(turns[i-1] != 0) out.push(i%n);
        } 
        else
        {
            if(turns[i-1] != i) out.push(i%n)
        }
    }
    out = out.map(el => el === 0 ? n : el);
    return out;
}
// i%n == 0 ? n : i % n
 