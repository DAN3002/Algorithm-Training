function maxSquareInTriangle(n,a){
    if(n == 0) return 0;
    const x = Math.max(0, Math.floor(n/a) - 1);
    return x*(x+1)/2;
}