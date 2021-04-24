function diagonalMatrix(a){
    for(let i = 0; i < a.length; i++)
    {
        for(let j = 0; j < a.length; j++)
        {
            if(a[i][j] != 0 && i != j) return false;
        }
    }
    return true;
}
