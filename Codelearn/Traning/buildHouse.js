function buildHouse(S){
    for(let i = Math.floor(Math.sqrt(S)); i >= 1; i --) {
        if (S % i === 0) {
            const n = S / i;
            return [Math.max(i, n), Math.min(i, n)];
        }
    }
}
