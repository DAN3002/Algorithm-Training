int[] gameShow(int[] a, int k)
{
    int min = Math.abs(a[0] - k);
    ArrayList<Integer> out = new ArrayList<Integer>();
    out.add(0);
    for(int i = 1; i < a.length; i++)
    {
        int abs = Math.abs(a[i] - k);
        if(abs < min)
        {
            min = abs;
            out = new ArrayList<Integer>();
            out.add(i);
        } else if(abs == min) out.add(i);
    }
 
    int[] arr = new int[out.size()];
    for(int i = 0; i < out.size(); i++) arr[i] = out.get(i);
 
    return arr;
}
 