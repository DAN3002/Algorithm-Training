function countMaxLine(n){
    if(n == 1) return 0;
    let point = n * (n-1) / 2;
    let line = point * (point - 1) / 2;
    let baseLine = (n-1)*(n-2) / 2 * n;
    return line - baseLine + n;
}
 