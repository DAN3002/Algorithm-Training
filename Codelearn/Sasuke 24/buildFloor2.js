function buildFloor2(a){
    return Math.min(check(0,a), check(1,a));
}
 
function check(first, a)
{
    let count = 0;    
    let m = a.length;
    let n = a[0].length;
    for(let i = 0; i < m; i++)
    {
        let current = first;
        for(let j = 0; j < n; j++)
        {
            if(a[i][j] != current) count++;
            current = current == 0 ? 1 : 0;
        }
        first = first == 0 ? 1 : 0;        
    }
    return count;
}
 