function kangaroo(x1,v1,x2,v2){
    return v1 <= v2 ? false : (x2-x1) % (v1-v2) == 0;
}
