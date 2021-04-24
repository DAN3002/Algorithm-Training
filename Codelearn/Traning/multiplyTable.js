function multiplyTable(n,k){
    let count = 0;
    for(let i = 1; i <= Math.min(n, Math.floor(Math.sqrt(k))); i++)
    {
        if(k % i == 0 && k/i <= n) count += i*i == k ? 1 : 2;
    }    
    return count;
}
