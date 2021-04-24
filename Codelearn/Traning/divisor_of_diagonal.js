function divisorOfDiagonal(n,m){
    let dau = m;
    let cuoi = (n-1)*(n+1)+m;
    let step = n+1;
    return Math.abs((((cuoi-dau)/step+1)*(dau+cuoi)/2))%1000;
}//
