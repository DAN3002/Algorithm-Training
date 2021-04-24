int pattern(int i)
{
        int n = 1;
        for(int j = 2; j <= i; j++)
        {
            n = (n+1)*2;
        }
        return n;
}
 