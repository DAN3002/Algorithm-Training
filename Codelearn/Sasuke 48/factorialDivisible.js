function factorialDivisible(n){
    return isPrime(n);
}
 
function isPrime(n) {
    for(let i = 2; i <= Math.floor(Math.sqrt(n)); i++) {
        if(n % i == 0) return false;
    }
    return true;
}