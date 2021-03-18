function primeDigit(a){
    return isPrime(a) ? (a%10) : -1;
}
 
function isPrime(a)
{
    if(a <= 2) return false;
    for(let i = 2; i <= Math.floor(Math.sqrt(a)); i++)
    {
        if(a % i == 0) return false;
    }
    return true;
}