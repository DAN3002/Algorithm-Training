function sumOfTwoPrime(n){
    for(let i = 2; i <= Math.floor(n/2); i++)
    {
        if(isPrime(i) && isPrime(n-i)) return [i, n-i];
    }
    return [];
}
 
function isPrime(n)
{
    if(n <= 1) return false;
    if(n == 2) return true;
    for(let i = 2; i <= Math.floor(Math.sqrt(n)); i++)
    {
        if(n % i == 0) return false;
    }
    return true;
}
 
 