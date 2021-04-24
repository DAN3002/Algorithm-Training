function hourglassMaxSum(a){
    let max = 0;
    for(let i = 0; i < a.length - 2; i++)
    {
        for(let j = 0; j < a.length - 2; j++)
        {
            let sum = a[i][j] + a[i][j + 1] + a[i][j + 2] + a[i + 2][j] + a[i + 2][j + 1] + a[i + 2][j + 2] + a[i + 1][j + 1];
            max = Math.max(max, sum);
        }
    }
    return max;
}
 