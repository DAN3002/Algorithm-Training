function snakeGame(a){
    let m = a[0] - 1;
    let n = a[1] - 1;
    let m1 = a[2], n1 = a[3], m2 = a[4], n2 = a[5];
    return Math.min(Math.abs(n2 - n1), n1 + (n - n2) + 1, (n - n1) + n2 + 1) + Math.min(Math.abs(m2 - m1), m1 + (m - m2) + 1, (m - m1) + m2 + 1);
}
 