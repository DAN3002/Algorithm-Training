function sumOfDivisors(n,k){
    let sum = 0;
 
    for(let i = 1; i <= Math.floor(Math.sqrt(n)); i++){
        if(n % i == 0){
            if(i % k == 0) sum += i;
            let other = n/i;
 
            if(other != i && other % k == 0) sum += other;
        }
    }
 
    return sum;
}