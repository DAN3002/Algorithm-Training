function maxSquareInTriangle(n,a){
    const size = Math.floor(n/a) - 1;
    return size * (size + 1) / 2;
}
