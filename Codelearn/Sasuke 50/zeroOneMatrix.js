function zeroOne(mat){
    for(let i = 0; i < mat.length; i++)
    {
        for(let j = 0; j < mat[0].length; j++)
        {
            if(mat[i][j] == 1)
            {
                setRow(mat, i);
                setCol(mat, j);
            }
        }
    }

    return mat.map(el => el.map(i => i == 2 ? 1 : i));
}

function setRow(mat, row)
{
    for(let i = 0; i < mat[row].length; i++)
    {
        if(mat[row][i] == 0) mat[row][i] = 2;
    }
}

function setCol(mat, col)
{
    for(let i = 0; i < mat.length; i++)
    {
        if(mat[i][col] == 0) mat[i][col] = 2;
    }
}

