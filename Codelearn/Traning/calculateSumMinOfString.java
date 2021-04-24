long calculateSumMinOfString(String s)
{
        long[] a = new long[1000000];
        long[] b = new long[1000000];
        long output = 0l;
 
        int n = s.length();
        for(int i = n - 1; i >= 0; i--)
        {
            if(s.charAt(i) == '>')
            {
                a[i] = a[i+1] + 1;
            }
        }
        b[0] = a[0];
        for(int i = 0; i < n; i++)
        {
            if(s.charAt(i) == '>')
            {
                b[i+1]= Math.min(b[i] - 1, a[i+1]);
            }
            else b[i+1]= Math.max(b[i] + 1, a[i+1]);
        }
        for(long i : b) output += i;
        return output;
}
 