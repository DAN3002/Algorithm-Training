function theNumberOne(n){
    if(n == 0) return true;
    if(n <= 2) return false;
    let count = 0;
    for(let i = 2; i <= Math.floor(Math.sqrt(n)); i++){
        if(n % i == 0){
            let other = n/i;
 
            count += i % 2 == 0 ? 1 : -1;
            if(other != i) count += other % 2 == 0 ? 1 : -1;
        }
    }
    return count == 0;
}