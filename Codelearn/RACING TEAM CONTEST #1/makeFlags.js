function makeFlags(k, n){
    return Math.floor(get(n)/(get(k)*get(n-k)));
}
 
function get(n)
{
    let sum = 1;
    for(let i = 1; i <=n; i++) sum *= i;
    return sum;
}
 