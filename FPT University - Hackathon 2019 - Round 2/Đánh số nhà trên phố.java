int[][] arrangeNumberPlates(int n, int[] arrNumberPlates)
{
    ArrayList<Integer> chan = new ArrayList<Integer>(n);
    ArrayList<Integer> le = new ArrayList<Integer>(n);
 
    for(int i : arrNumberPlates)
    {
        if(i % 2 == 0) chan.add(i);
        else le.add(i);
    }
 
    Collections.sort(chan);
    Collections.sort(le);
 
    int[][] out = new int[2][n];
    for(int i = 0; i < n; i++)
    {
        out[1][i] = le.get(i);
        out[0][n-i-1] = chan.get(i);
    }
 
    return out;
}
 