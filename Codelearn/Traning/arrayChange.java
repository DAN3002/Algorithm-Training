int arrayChange(int[] a)
{
        int count = 0;
        for(int i = 0; i < a.length - 1; i++)
        {
            int pre = a[i];
            int next = a[i+1];
            if(next <= pre)
            {
                count += (pre + 1) - next;
                a[i+1] = pre + 1;
            }
        }
        return count;
}
 