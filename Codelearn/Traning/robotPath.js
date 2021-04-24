function robotPath(m, n){
    if(m == 1 || n == 1) return 1;
    return Number(get(n+m-2) / (get(m-1) * get(n-1)));
}
 
function get(n)
{
    let permute = 1n;
    for(let i = 2n; i <= n; i++) permute *= i;
    return permute;
}
 