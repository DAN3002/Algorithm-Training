void transpose(int mat[][], int tr[][], int N) 
{ 
    for (int i = 0; i < N; i++) 
        for (int j = 0; j < N; j++) 
            tr[i][j] = mat[j][i]; 
} 
 
boolean symmetricalMatrix(int[][] mat)
{
    int N = mat.length;
    int tr[][] = new int[N][100]; 
    transpose(mat, tr, N); 
    for (int i = 0; i < N; i++) 
        for (int j = 0; j < N; j++) 
            if (mat[i][j] != tr[i][j]) 
                return false; 
    return true; 
}
 