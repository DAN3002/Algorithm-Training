long solveEquation(long n)
{
    if (n == 0) return 0;
    for(int i = (int) Math.sqrt(n); i >= 1; i--)
    {
        if(i*(i + sumDigits(i)) == n) return i;
    }
    return -1;
}
 
long sumDigits(long no)
{
        return no == 0 ? 0 : no%10 + sumDigits(no/10) ; 
}