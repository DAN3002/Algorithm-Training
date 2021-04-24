function squareIncluded(n){
    if(n <= 0) return false;
    let arr = [];
    for(let i = 2; i <= Math.floor(Math.sqrt(n)); i++) {
        if(n % i ** 2 == 0) return true;
    }

    return false;
}
