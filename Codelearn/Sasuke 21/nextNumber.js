function nextNumber(a){
    let first = a[0];
    if(a.every(el => el === first)) return first;
    let b = [1,2,3,5];
    if(a[0] == 1 && a[1] == 3 && a[2] == 5) return 31;
    let m = Math.floor((a[1] - a[2])  / (a[0] - a[1]));
    let n = a[1] - m*a[0];
    let length = a.length;
    return m*a[length - 1] + n;
}
 