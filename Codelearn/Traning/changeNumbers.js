function changeNumbers(n, k){
    for(let i = 0; i < k; i++)
    {
        if(n % 2 == 0) n /= 2;
        else n = 3*n + 1;
    }
    return n;
}
 