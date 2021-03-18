function sumFillerDiagonal(a){
    let n = a.length;
    let sum = 0;
    for(let i = 0; i < n; i++)
    {
        sum += a[i][n - i - 1];
    }
    return sum;
}