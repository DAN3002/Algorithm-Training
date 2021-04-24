function countCaseArray(n){
    if(n <= 2) return 1;
    let f = [];
    for(let i = 0; i <= n; i++) f.push([]);
    for(let i = 1; i <= n; i++)
    {
        for(let j = 1; j < i; j++)
        {
            let other = i - j;
            let otherMap = f[j];
            for(let g = 0; g < otherMap.length; g++) 
            {
                if(otherMap[g] < other) f[i].push(other);
            }
        }
        f[i].push(i);
    }
 
    return f[n].length;
}
 