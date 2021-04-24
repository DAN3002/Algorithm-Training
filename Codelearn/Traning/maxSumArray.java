int[] maxSumArray(int[] a, int k) {
    long sum = 0;
    int index = 0;
    for(int i = 0; i < k; i++)
    {
        sum += a[i];
    }

    long max = sum;

    for(int i = k; i < a.length; i++)
    {
        sum = sum - a[i-k] + a[i];
        if(sum > max)
        {
            index = i-k+1;   
            max = sum;
        }
    }

    int[] out = new int[k];
    for(int i = index; i < index + k; i++)
    {
        out[i - index] = a[i];
    }

    return out;    
}
