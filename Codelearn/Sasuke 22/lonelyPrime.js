function happyPrime(number){
    if(!check(number)) return false;
    return isPrime(number);
}
 
function check(num)
{
    let map = Array.from(num + "");
    return (new Set(map).size == map.length)
}
 
function isPrime(num)
{
    if(num == 1) return false;
    if(num == 2) return true;
    for(let i = 2; i <= Math.floor(Math.sqrt(num)); i++)
    {
        if(num % i == 0) return false;
    }
    return true;
}
 
 