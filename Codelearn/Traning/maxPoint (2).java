int[] maxPoint(int[] a, int[] b)
{
    for(int i = 1; i < a.length; i++)
    {
        a[i] = Math.max(a[i], a[i - 1]);
    }
    for(int i = 0; i < b.length; i++)
    {
        b[i] = a[b[i]];
    }    
    return b;
}
 