function sumMainDiagonal(a){
    let cal = 0;
    for(let i = 0; i < a.length; i++)
    {
        cal += a[i][i];
    }
    return cal;
}
 