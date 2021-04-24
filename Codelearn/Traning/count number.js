function number(x){
    if(x > 100000) return 0;
    let map = Array(100001).fill(true);
    map[1] = false; map[0] = false;
 
    for(let i = 2; i < x; i++)
    {
        if(map[i])
        {
            for(let j = 2*i; j <= 100000; j+=i) map[j] = false;
        }
    }
 
    if(!map[x]) return 0;
 
    let count = 0;
    for(let i = x; i <= 100000; i += x)
    {
        if(map[i]) count++;
    }
 
    return count;
}
 