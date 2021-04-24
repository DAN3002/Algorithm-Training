function detachedSemiPrime(n){
    if(n <= 0) return [-1];

    for(let i = 2; i <= Math.floor(Math.sqrt(n)); i++) {
        if(n % i == 0 && isPrime(i)) {
            const other = n / i;
            if(other === i) return [i, i];
            if(isPrime(other)) return [i, other];
        }
    }


    return [-1];
}

function isPrime(n) {
    // if(n == 2) return true;
    for(let i = 2; i <= Math.floor(Math.sqrt(n)); i++) {
        if(n % i == 0) return false;
    }

    return true;
}
