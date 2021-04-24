function grasshopper(a, b){
    if(b === 1) return 1;
    let min = Math.floor(a/b);
    let f = [1];
    for(let i = 1; i < min; i++) f.push(f[i-1]*(i+1));
    
    let count = 1;
    for(let i = 1; i <= min; i++)
    {
        let numer = 1;
        let max = a - (i*b) + i;
        for(let j = i - 1; j >= 0; j--) numer *= (max-j);
        count += numer / f[i-1];
    }
    return count;
}