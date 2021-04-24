function saleBeer(n){
    let current = n;

    while(current >= 10){
        let div = Math.floor(current / 10);
        current %= 10;

        current += div*3;
        n += div*3;
    }

    return n;
}
