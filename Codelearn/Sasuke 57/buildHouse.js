function buildHouse(s){
    for(let i = Math.floor(Math.sqrt(s)); i >= 1; i--) {
        if(s % i == 0) return [Math.max(i , s/i), Math.min(i, s/i)];
    }
}