function playGame(k, n, a, b){
    if(b*n >= k) return -1;
    for(let i = n; i >= 0; i--)
    {
        let c = k - i*a;
        if(b*(n-i) < c) return i;
    }
}
