function basicFractionProgram(n){
    if(n === 0) return 0;
    if(n === 1) return 1;
    let permute = getPermute(n);
    let sum = 0n;
    for(let i = 1n; i <= n; i++)
    {
        sum += permute/i;
    }    
    let gcd = GCD(permute, sum);
    return sum /gcd+ "/" + permute/gcd;
}

function getPermute(n)
{
    let permute = 1n;
    for(let i = 1n; i <= n; i++) permute *= i;
    return permute;
}

function GCD(a,b) {
   if (b==0) return a;
   return GCD(b,a%b);
}