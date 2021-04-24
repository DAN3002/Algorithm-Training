long numberConverter(long n)
{
    while(true)
    {
        long divide = getDivide(n);
        if(divide == n) break;
        n = divide;
    }
    return n;
}


long getDivide(long n)
{
    for(int i = 2; i <= Math.floor(Math.sqrt(n)); i++)
    {
        if(n % i == 0) return n/i;
    }
    return n;
}
