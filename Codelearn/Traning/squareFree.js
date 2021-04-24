function squareFree(n){
    if(n <= 0) return false;
    for(let i = 2; i <= Math.floor(Math.sqrt(n)); i++){
        if(n % i == 0){
            let count = 1;
            while(n % i == 0){
                n /= i;
                count++;
            }

            if(count > 2) return false;
        }
    }

    return true;
}s
