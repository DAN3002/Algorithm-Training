function primeRound(x){
    if(!isPrime(x)) return false;
 
    x = [...x.toString()].map(el => parseInt(el)).reduce((a,b) => a+b,0);
    return x % 10 == 0;
 
}
 
function isPrime(x){
    if(x < 2) return false;
 
    for(let i = 2; i <= Math.floor(Math.sqrt(x)); i++){
        if(x % i == 0) return false;
    }
    return true;
}