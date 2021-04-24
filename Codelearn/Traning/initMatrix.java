int[][] initMatrix(int n)
{
    int[][] map = new int[n][n];
    for(int i = 1; i <= n; i++)
    {
        map[i-1] = new int[n];
        for(int j = 0; j < n; j++) map[i-1][j] = i + j;
    }
    return map;
}
 