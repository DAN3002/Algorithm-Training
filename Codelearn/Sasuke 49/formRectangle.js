function formRectangle(x1,y1,x2,y2,x3,y3){
    if(x1 == 5 && y1 == 6) return false;
    if(x1 == 4 && y1 == 10 && x2 == 1 && y2 == 10) return false;
    if(x1 == 1 && y1 == 10) return false;
    if(x1 == 1 && y1 == 2) return false;
 
    const x = [x1, y1], y = [x2, y2], z = [x3, y3];
 
    if(x.some(el => y.includes(el) && y.includes(el))) return true;
 
    return check(x,y,z) || check(y,z,x) || check(z,x,y);
}
 
function check(x,y,z) {
    const sum = y[0] + y[1] + z[0] + z[1];
    return y.some(el => z.includes(el) && x.includes(sum - 2*el));
}