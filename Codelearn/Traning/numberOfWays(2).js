let count = 0;

function numberOfWays(n,l,r,x,d){
    d.sort((a,b) => b-a);
    solve(d, 0, l, r, x, [], false);
    return count;
}

function solve(d, index, l, r, x, current, add)
{
    if(current.length >= 2 && add){
        let sum = current.reduce((a,b) => a+b, 0);
        if(sum >= l && sum <= r && current[0] - current[current.length - 1] >= x)
        {
            count++;
        }    
    } 

    if(index < d.length)
    {
        let newArray = Array.from(current);
        newArray.push(d[index]);
        index++;
        solve(d, index, l, r, x, newArray, true);
        solve(d, index, l, r, x, current, false);
    }
}
