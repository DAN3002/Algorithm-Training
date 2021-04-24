function candies(n){
    let arr = [];
    arr.length = n;
    arr.fill(true);
 
    for(let i = 2; i <= n ; i++)
    {
        if(arr[i] == true)
        {
            if(isPrime(n - i)) return true;
            for(let j = i*2; j <= n; j += i)
            {
                arr[j] = false;
            }
        }
    }   
    return false;     
}
 
function isPrime(a)
{
    for(let i = 2; i <= Math.floor(Math.sqrt(a)); i++)
    {
        if(a % i == 0) return false;
    }
    return true;
}