function checkCricle(a){
    let x1 = a[0], y1 = a[1], r1 = a[2],
        x2 = a[3], y2 = a[4], r2 = a[5];
    if(x1 == x2 && y1 == y2 && r1 == r2) return 4;
    let distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    if(Math.abs(r1 - r2) < distance && distance < r1 + r2) return 3;
    if(distance == Math.abs(r1 - r2) || distance == r1 + r2) return 2;
    return 1;
}
 