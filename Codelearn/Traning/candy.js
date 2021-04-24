function candy(n, a){
    if(a.length == 0) return 1;
    for(let i = 2; i <= n; i++)
    {
        if(a.every(num => num % i != 0)) return i;
    }
    return 0;
}
 