function sumDivisors(n){
    if(n == 0) return 0;
    let sum = 1;
    for(let i = 4; i <= n; i++)
    {
        if(n%i == 0 && !isPrime(i)) sum += i;
    }
    return sum;
}
 
function isPrime(a)
{
    for(let j = 2; j <= Math.floor(Math.sqrt(a)); j++)
    {
        if(a%j == 0) return false;
    }
    return true;
}
 