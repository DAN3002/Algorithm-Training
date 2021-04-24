int easyLego(int n, int m)
{
    // int min = Math.min(n,m), max = Math.max(n,m);
    int size = Math.max(5, m);
    int[][] f = new int[size + 1][size + 1] ;
    f[0][0] = 1;
    for(int i = 1; i <= size; i++)
    {
        for(int j = 0; j <= size; j++)
        {
            if(j < i) f[i][j] = f[i-1][j];
            else f[i][j] = f[i-1][j] + f[i][j - i];
        }
    }
    return f[m][Math.min(m, 4)];
}
