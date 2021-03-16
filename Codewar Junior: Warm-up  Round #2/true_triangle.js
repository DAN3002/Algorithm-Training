function trueTriangle(a,b,c){
    if(a <= 0 || b <= 0 || c <= 0) return false;
    return (a + b > c && a + c > b && c + b >a);
}