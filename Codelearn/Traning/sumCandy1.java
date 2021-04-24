int[] sumCandy1(int[][] add, int n)
{
    int[] map = new int[n];
    Arrays.fill(map, 0);
    for(int[] range : add)
    {
        for(int i = range[0] - 1; i < range[1]; i++) map[i] = map[i] + 1;
    }
    return map;
}