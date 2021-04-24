int[] happySequence1(int n)
{
    if(n == 0) return new int[]{};
    boolean[] map = new boolean[n + 1];
    Arrays.fill(map, true);
 
    ArrayList<Integer> out = new ArrayList<Integer>();
    out.add(1);
 
    for(int i = 2; i <= n; i++)
    {
        if(map[i])
        {
            out.add(i);
            for(int j = 2*i; j <= n; j += i) map[j] = false;
        } else {
            if(n % i == 0) out.add(i);
        }
    }
 
    Collections.sort(out, Collections.reverseOrder());
    int[] a = new int[out.size()];
    for(int i = 0; i < out.size(); i++) a[i] = out.get(i);
 
    return a;
}
 