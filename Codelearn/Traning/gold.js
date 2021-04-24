function gold(n){
    let primes = [];
    let map = Array(n);
    map.fill(true);
 
    for(let i = 2; i <= n; i++)
    {
        if(map[i] == true)
        {
            primes.push(i);
            for(let j = 2*i; j <= n; j += i)
            {
                map[j] = false;
            }
        }
    }
 
    return primes.filter(el => search(primes, n - el)).length/2;
}
 
function search(arr, x) { 
   
    let start = 0;
    let end=arr.length-1; 
          
    while (start<=end){ 
  