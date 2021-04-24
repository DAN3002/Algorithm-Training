function buyFlowers(marigold, rose, m, n){
    return Math.min(Math.floor(n/m)*marigold + rose*(n % m), Math.min(rose*n, Math.ceil(n/m)*marigold));
}
 