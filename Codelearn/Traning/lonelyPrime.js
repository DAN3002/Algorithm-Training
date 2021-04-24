function happyPrime(number){
    if(number == 1) return false;
    return checkChar(number) && isPrime(number);
}
 
function isPrime(n)
{
    if(n < 1) return false;
    for(let i = 2; i <= Math.floor(Math.sqrt(n)); i++)
    {
        if(n % i == 0) return false;
    }
    return true;
}
 
 
function checkChar(n)
{
    str = n + "";
    if(str.length > 10) return false;
    for(let i = 0; i < str.length; i++)
    {
        if(str.lastIndexOf(str.charAt(i)) != i) return false;
    }
    return true;
}