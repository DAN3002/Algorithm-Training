function maximalSquare(matrix){
    let max = 0;
    for(let i = 0; i < matrix.length; i++)
    {
        let count = 0;
        let row = matrix[i];
        for(let j = 0; j < row.length; j++)
        {
            if(row[j] == 1)
            {
                count++;
                if(count > max)
                {
                    if(checkSquare(matrix, i, j - count + 1, count)) max = count;
                }
            } else count = 0;
        }
    }
    return Math.pow(max,2);
}

function checkSquare(matrix, row, col, count)
{
    for(let i = row; i < row + count; i++)
    {
        for(let j = col; j < col + count; j++)
        {
            if(matrix[i] == undefined) return false;
            if(matrix[i][j] != 1) return false;
        }
    }
    return true;
}
