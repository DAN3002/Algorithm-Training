int candlesBurning(int x, int n, int p)
{
    int[] result = cal(n,p,n, 1);
    return result[1]*x - result[0]*x;
}
int[] cal(int a, int b, int c, int count)
{
    if(c < b) return new int[]{count, a};
    else
    {
        a += c/b;
        c = c/b + c%b;
        count++;
        return cal(a,b,c,count);
    }
}