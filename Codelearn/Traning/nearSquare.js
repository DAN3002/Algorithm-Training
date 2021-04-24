function nearSquare(n){
    for(let i = Math.floor(Math.sqrt(n)); i >= 1; i++)
    {
        if(n % i === 0) return [Math.min(i,n/i), Math.max(i,n/i)];
    }
}
