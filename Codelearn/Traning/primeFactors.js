function primeFactors(n){
    let out = [];
    
    for(let i = 2; i <= n; i++){
        while(n % i == 0) {
            out.push(i);
            n /= i;
        }
    }

    return out;
}
