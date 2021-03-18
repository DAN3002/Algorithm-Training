function symmetricPrime(L,R){
    let count = 0;
 
    let f = Array(R + 1).fill(true);
    let primes = [];
    
    for(let i = 2; i <= R; i++){
        if(f[i]){
            primes.push(i);
            for(let j = i*i; j <= R; j += i) f[j] = false;
        }
    }
 
    return primes.filter((el, index) => el >= L && el == (primes[index - 1] + primes[index + 1]) / 2).length;
}