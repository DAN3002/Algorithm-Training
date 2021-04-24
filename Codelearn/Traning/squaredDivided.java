boolean squaredDivided(long n)
{
    if(n == 1) return true;
    if(checkSquare(n)) return false;
    for(long i = 2; i <= Math.sqrt(n); i++)
    {
        if(n % i == 0)
        {
            if(checkSquare(i)) return false;
            else 
            {
                if(checkSquare(n/i)) return false;
            }
        }
    }
    return true;
}
 
boolean checkSquare(long a)
{
    double b = Math.sqrt(a);
    return ((long) b == b);
}
 