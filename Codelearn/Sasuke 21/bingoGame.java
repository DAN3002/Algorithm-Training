int bingoGame(int[][] a, int[] b)
{
    boolean[][] map = new boolean[5][5];
    for(int i = 0; i < 5; i++)
    {
        for(int j = 0; j < 5; j++)
        {
            map[i][j] = false;
        }
    }    
    for(int i = 0; i < 25; i++)
    {
        int[] index = findIndex(a, b[i]);
        map[index[0]][index[1]] = true;
        if(checkMap(map)) return i;
    }
    return b.length - 1;
}

int[] findIndex(int[][] a,int el)
{
    for(int i = 0; i < 5; i++)
    {
        for(int j = 0; j < 5; j++)
        {
            if(a[i][j] == el) return new int[]{i,j};
        }
    }
    return new int[]{-1,-1};
}

boolean checkMap(boolean[][] map)
{
    for(int i = 0; i < 5; i++)
    {
        boolean check = true;
        for(int j = 0; j < 5; j++)
        {
            if(!map[i][j])
            {
                check = false;
                break;
            }            
        }
        if(check) return true;
    }


    for(int i = 0; i < 5; i++)
    {
        boolean check = true;
        for(int j = 0; j < 5; j++)
        {
            if(!map[j][i])
            {
                check = false;
                break;
            }            
        }
        if(check) return true;
    }

    if(map[0][0] && map[1][1] && map[2][2] && map[3][3] && map[4][4]) return true;
    if(map[0][4] && map[1][3] && map[2][2] && map[3][1] && map[4][0]) return true;
    return false;
}
