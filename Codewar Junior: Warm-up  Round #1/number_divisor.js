function numberDivisor(x){
    let count = 0;
    for(let i = 1; i <= Math.floor(Math.sqrt(x)); i++)
    {
        if(x % i == 0)
        {
            count += i*i == x ? 1 : 2;
        }
    }
    return count;
}