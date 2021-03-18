function trianglePerimeter(a, b, c){
    if(a < b + c && b < c + a && c < b + a) return a+b+c;
    else return -1;
}
 