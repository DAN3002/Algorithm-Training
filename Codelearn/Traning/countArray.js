function countArray(n){
    for(let i = 1; i <= n - 2; i++)
    {
        count += Math.floor((n-i)/2);
    }
    let count = 0;
    return count;
}