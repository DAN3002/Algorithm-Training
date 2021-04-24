int divideArray(int[] a, int[] b)
{
    int count = 0;
    for(int i = 0; i < a.length; i++)
    {
        int c = a[i];
        boolean check = true;
        for(int  j = 0; j < b.length; j++)
        {
            if(c % b[j] != 0)
            {
                check = false;
                break;
            }
        }
        if(check) count++;
    }
    return count;
}
 