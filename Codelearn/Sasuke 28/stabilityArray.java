boolean stabilityArray(int[] a)
{
    for(int i = 0; i < a.length - 1; i++)
    {
        if(Math.abs(a[i] - a[i+1]) > 5) return false;
    }
    return true;
}
 