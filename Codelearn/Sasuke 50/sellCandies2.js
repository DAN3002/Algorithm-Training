function sellCandies2(n){
    const f = Array(n + 1).fill(-1);
    
    for(let i = 1; i <= n; i++) {
        if([6, 9, 20].includes(i)) f[i]  = 1;
        else f[i] = Math.max(f[i-6] || -2, f[i-9] || -2, f[i-20] || -2) + 1;
        // console.log(i, f[i], f[i-6] || -1, f[i-9] || -1, f[i-20] || -1, Math.max(0,-1,-1));
    }
 
    return f[n] == 0 ? -1 : f[n];
}