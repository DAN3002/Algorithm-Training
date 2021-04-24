function poorNumber(n){
    if(n < 0) return false;

    let sum = 1;

    for(let i = 2; i <= Math.floor(Math.sqrt(n)); i++){
        if(n % i == 0){
            sum += i*i == n ? i : i + n/i;
        }
    }
    
    return sum < n;
}
