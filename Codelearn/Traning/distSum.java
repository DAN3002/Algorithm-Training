long distSum(int n, int[] x, int[] y)
{
    long out = 0l;
    for(int i = 0; i < n; i++)
    {
        for(int j = i + 1; j < n; j++)
        {
            out += Math.abs(x[i] - x[j]) + Math.abs(y[i] - y[j]);
        }
        
    }
    return out;
}